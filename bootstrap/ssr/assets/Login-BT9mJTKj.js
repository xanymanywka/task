import { F as FlashMessages, L as Logo } from "./FlashMessages-DizfipYZ.js";
import { L as LoadingButton, T as TextInput } from "./LoadingButton-CYW6UWDJ.js";
import { Head, Link } from "@inertiajs/vue3";
import vueRecaptcha from "vue3-recaptcha2";
import { Crown, Shield, User, Users } from "lucide-vue-next";
import { resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "uuid";
const _sfc_main = {
  metaInfo: { title: "Login" },
  components: {
    FlashMessages,
    LoadingButton,
    Logo,
    TextInput,
    Head,
    Link,
    vueRecaptcha,
    Crown,
    Shield,
    User,
    Users
  },
  props: {
    is_demo: Number,
    site_key: String,
    enable_registration: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      loadingTimeout: 3e4,
      disable_login_button: true,
      isLoggingIn: false,
      loginError: null,
      form: this.$inertia.form({
        email: "",
        password: "",
        remember: false
      }),
      demoCredentials: {
        admin: {
          email: "john.due.helo@mail.com",
          icon: Crown
        },
        normal: {
          email: "sabbir@example.com",
          icon: Shield
        }
      }
    };
  },
  methods: {
    login() {
      this.form.post(this.route("login.store"));
    },
    recaptchaVerified(response) {
      this.disable_login_button = false;
    },
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {
    },
    recaptchaError(reason) {
      console.log(reason);
    },
    clearError() {
      this.loginError = null;
    },
    autofillLogin(e, role, login = false) {
      e.preventDefault();
      const roleEmails = {
        "admin": { email: "john.due.helo@mail.com", password: "s6J5WQR9ZlpvG7" },
        "normal": { email: "sabbir@example.com", password: "SY7Ta85KTV2e0n" }
      };
      this.form.email = roleEmails[role]["email"];
      this.form.password = roleEmails[role]["password"];
      if (login) {
        this.login();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_flash_messages = resolveComponent("flash-messages");
  const _component_Link = resolveComponent("Link");
  const _component_Logo = resolveComponent("Logo");
  const _component_text_input = resolveComponent("text-input");
  const _component_vue_recaptcha = resolveComponent("vue-recaptcha");
  const _component_loading_button = resolveComponent("loading-button");
  const _component_Crown = resolveComponent("Crown");
  const _component_Shield = resolveComponent("Shield");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Login" }, null, _parent));
  _push(`<div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4" data-v-b5b2236f><div class="absolute inset-0 overflow-hidden" data-v-b5b2236f><div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" data-v-b5b2236f></div><div class="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" data-v-b5b2236f></div><div class="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" data-v-b5b2236f></div></div>`);
  _push(ssrRenderComponent(_component_flash_messages, null, null, _parent));
  _push(`<div class="relative w-full max-w-md" data-v-b5b2236f><div class="text-center mb-8" data-v-b5b2236f>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("home"),
    class: "inline-block"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Logo, { class: "block w-48 mx-auto fill-white drop-shadow-lg" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Logo, { class: "block w-48 mx-auto fill-white drop-shadow-lg" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="mt-4 text-slate-600 dark:text-slate-400 text-sm" data-v-b5b2236f> Welcome back! Please sign in to your account </p></div><div class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden" data-v-b5b2236f><div class="px-8 pt-8 pb-6" data-v-b5b2236f><h1 class="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2" data-v-b5b2236f>${ssrInterpolate(_ctx.$t("Sign In"))}</h1><p class="text-center text-slate-600 dark:text-slate-400 text-sm" data-v-b5b2236f> Enter your credentials to access your account </p></div><form class="px-8 pb-8" data-v-b5b2236f><div class="mb-6" data-v-b5b2236f>`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    label: "Email Address",
    type: "email",
    autofocus: "",
    autocapitalize: "off",
    placeholder: "Enter your email",
    class: "w-full",
    onInput: $options.clearError
  }, null, _parent));
  _push(`</div><div class="mb-6" data-v-b5b2236f>`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    class: "w-full",
    onInput: $options.clearError
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-between mb-6" data-v-b5b2236f><label class="flex items-center cursor-pointer group" data-v-b5b2236f><input id="remember"${ssrIncludeBooleanAttr(Array.isArray($data.form.remember) ? ssrLooseContain($data.form.remember, null) : $data.form.remember) ? " checked" : ""} type="checkbox" class="w-4 h-4 text-blue-600 bg-white border-slate-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600" data-v-b5b2236f><span class="ml-2 text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" data-v-b5b2236f>${ssrInterpolate(_ctx.$t("Remember Me"))}</span></label>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("password.reset"),
    class: "text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Forgot Password?"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Forgot Password?")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  if ($props.site_key) {
    _push(`<div class="flex justify-center mb-6" data-v-b5b2236f>`);
    _push(ssrRenderComponent(_component_vue_recaptcha, {
      sitekey: $props.site_key,
      size: "normal",
      theme: "light",
      onVerify: $options.recaptchaVerified,
      onExpire: $options.recaptchaExpired,
      onFail: $options.recaptchaFailed,
      onError: $options.recaptchaError,
      ref: "vueRecaptcha"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.loginError) {
    _push(`<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg" data-v-b5b2236f><div class="flex items-center" data-v-b5b2236f><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" data-v-b5b2236f><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" data-v-b5b2236f></path></svg> ${ssrInterpolate($data.loginError)}</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    disabled: $data.disable_login_button && $props.site_key || $data.isLoggingIn,
    loading: $data.isLoggingIn,
    class: "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (!$data.isLoggingIn) {
          _push2(`<span data-v-b5b2236f${_scopeId}>${ssrInterpolate(_ctx.$t("Sign In"))}</span>`);
        } else {
          _push2(`<span data-v-b5b2236f${_scopeId}>${ssrInterpolate(_ctx.$t("Signing In..."))}</span>`);
        }
      } else {
        return [
          !$data.isLoggingIn ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("Sign In")), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("Signing In...")), 1))
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($props.enable_registration) {
    _push(`<div class="mt-6 text-center" data-v-b5b2236f><p class="text-sm text-slate-600 dark:text-slate-400" data-v-b5b2236f>${ssrInterpolate(_ctx.$t("Don't have an account?"))} `);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("register"),
      class: "font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t("Sign Up"))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t("Sign Up")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</form></div>`);
  if ($props.is_demo) {
    _push(`<div class="demo_credentials mt-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl overflow-hidden" data-v-b5b2236f><div class="px-6 py-4 border-b border-slate-200/50 dark:border-slate-700/50" data-v-b5b2236f><h3 class="text-lg font-semibold text-slate-900 dark:text-white text-center" data-v-b5b2236f> 🚀 Demo Credentials </h3><p class="text-sm text-slate-600 dark:text-slate-400 text-center mt-1" data-v-b5b2236f> Try different user roles instantly <br data-v-b5b2236f> ✨ with one click 🎯 </p></div><div class="p-6" data-v-b5b2236f><div class="grid grid-cols-2 gap-3 mb-6" data-v-b5b2236f><button class="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg" data-v-b5b2236f>`);
    _push(ssrRenderComponent(_component_Crown, { class: "w-4 h-4 mr-2" }, null, _parent));
    _push(` Admin </button><button class="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg" data-v-b5b2236f>`);
    _push(ssrRenderComponent(_component_Shield, { class: "w-4 h-4 mr-2" }, null, _parent));
    _push(` Normal </button></div><div class="space-y-3" data-v-b5b2236f><h4 class="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3" data-v-b5b2236f> Or copy credentials manually: </h4><div class="space-y-2" data-v-b5b2236f><!--[-->`);
    ssrRenderList($data.demoCredentials, (credential, role) => {
      _push(`<div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600" data-v-b5b2236f><div class="flex-1" data-v-b5b2236f><div class="flex items-center space-x-2" data-v-b5b2236f>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(credential.icon), { class: "w-4 h-4 text-slate-500" }, null), _parent);
      _push(`<span class="text-sm font-medium text-slate-700 dark:text-slate-300 capitalize" data-v-b5b2236f>${ssrInterpolate(role)}</span></div><div class="mt-1 text-xs text-slate-600 dark:text-slate-400" data-v-b5b2236f>${ssrInterpolate(credential.email)}</div></div><button class="ml-3 px-3 py-1 text-xs bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-300 rounded-md transition-colors" data-v-b5b2236f> Copy </button></div>`);
    });
    _push(`<!--]--></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b5b2236f"]]);
export {
  Login as default
};
