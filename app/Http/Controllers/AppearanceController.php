<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AppearanceController extends Controller
{
    /**
     * Default appearance settings
     */
    public static function defaults(): array
    {
        return [
            'primary_color'      => '#6366f1',
            'background_color'   => '#f8fafc',
            'sidebar_color'      => '#1e293b',
            'text_color'         => '#0f172a',
            'font_family'        => 'inter',
            'font_size'          => '14',
            'border_radius'      => '8',
            'sidebar_style'      => 'default',
            'layout_density'     => 'comfortable',
            'card_shadow'        => 'soft',
        ];
    }

    /**
     * Show appearance settings page
     */
    public function index()
    {
        $user = Auth::user();
        $appearance = $user->appearance ?? self::defaults();

        // Merge with defaults so any new keys are always present
        $appearance = array_merge(self::defaults(), $appearance);

        return Inertia::render('Settings/Appearance', [
            'appearance' => $appearance,
            'fonts' => [
                ['value' => 'inter',      'label' => 'Inter'],
                ['value' => 'roboto',     'label' => 'Roboto'],
                ['value' => 'poppins',    'label' => 'Poppins'],
                ['value' => 'nunito',     'label' => 'Nunito'],
                ['value' => 'lato',       'label' => 'Lato'],
                ['value' => 'open-sans',  'label' => 'Open Sans'],
                ['value' => 'raleway',    'label' => 'Raleway'],
                ['value' => 'system',     'label' => 'System Default'],
            ],
        ]);
    }

    /**
     * Save appearance settings
     */
    public function update(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'primary_color'    => 'nullable|string|max:20',
            'background_color' => 'nullable|string|max:20',
            'sidebar_color'    => 'nullable|string|max:20',
            'text_color'       => 'nullable|string|max:20',
            'font_family'      => 'nullable|string|in:inter,roboto,poppins,nunito,lato,open-sans,raleway,system',
            'font_size'        => 'nullable|integer|min:10|max:20',
            'border_radius'    => 'nullable|integer|min:0|max:24',
            'sidebar_style'    => 'nullable|string|in:default,compact,wide',
            'layout_density'   => 'nullable|string|in:compact,comfortable,spacious',
            'card_shadow'      => 'nullable|string|in:none,soft,medium,hard',
        ]);

        $user = Auth::user();
        $current = $user->appearance ?? self::defaults();
        $merged = array_merge($current, array_filter($validated, fn($v) => $v !== null));

        $user->appearance = $merged;
        $user->save();

        return response()->json(['appearance' => $merged]);
    }

    /**
     * Reset appearance to defaults
     */
    public function reset(): JsonResponse
    {
        $user = Auth::user();
        $user->appearance = self::defaults();
        $user->save();

        return response()->json(['appearance' => self::defaults()]);
    }
}
