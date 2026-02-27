<?php

namespace App\Http\Middleware;

use App\Http\Controllers\AppearanceController;
use App\Models\Language;
use App\Models\Project;
use App\Models\Setting;
use App\Models\Timer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request) {
        return array_merge(parent::share($request), [
            'auth' => function () use ($request) {
                return [
                    'user' => $request->user() ? [
                        'id' => $request->user()->id,
                        'first_name' => $request->user()->first_name,
                        'last_name' => $request->user()->last_name,
                        'email' => $request->user()->email,
                        'city' => $request->user()->city,
                        'locale' => $request->user()->locale,
                        'country_id' => $request->user()->country_id,
                        'role' => $request->user()->role ?? ['slug' => 'na', 'name' => 'Not Assigned', 'access' => null],
                        'photo' => $request->user()->photo_path ?? null,
                    ] : null,
                    'timer' => $request->user() ? Timer::with('task')->where('user_id', $request->user()->id)->whereNull('stopped_at')->first() : null,
                    'notifications' => fn () => $request->user()
                        ? $request->user()->notifications()->limit(10)->get()
                        : null,
                    'unread_count' => fn () => $request->user()
                        ? $request->user()->unreadNotifications()->count()
                        : 0,
                ];
            },
            'flash' => function () use ($request) {
                return [
                    'message' => $request->session()->get('message'),
                    'success' => $request->session()->get('success'),
                    'error' => $request->session()->get('error'),
                ];
            },
            'settings' => function () {
                return cache()->rememberForever('global_settings', function () {
                    return Setting::whereIn('slug', ['app_name', 'default_language', 'allowed_file_types'])->pluck('value', 'slug');
                });
            },
            'appearance' => function () use ($request) {
                if (!$request->user()) {
                    return AppearanceController::defaults();
                }
                return array_merge(
                    AppearanceController::defaults(),
                    $request->user()->appearance ?? []
                );
            },
        ]);
    }
}
