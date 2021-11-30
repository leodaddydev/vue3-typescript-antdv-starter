import { loginIgnore } from "@/router/index";
import { checkAuthorization } from "@/utils/request.ts";
import NProgress from "nprogress";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

NProgress.configure({ showSpinner: false });

/**
 * @param to
 * @param form
 * @param next
 */
const progressStart = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  // start progress bar
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
  next();
};

/**
 * @param to
 * @param form
 * @param next
 * @param options
 */
export const loginGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): Promise<void> => {
  if (!loginIgnore.includes(to) && !(await checkAuthorization())) {
    next({ path: "/auth/login" });
  } else {
    next();
  }
};

/**
 * @param to
 * @param form
 * @param options
 */
const progressDone = (): void => {
  // finish progress bar
  NProgress.done();
};

export default {
  beforeEach: [progressStart, loginGuard],
  afterEach: [progressDone],
};
