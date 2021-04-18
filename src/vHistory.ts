import {
    NavigationGuardNext,
    RouteLocationNormalized,
    RouteLocationRaw,
    Router
} from "vue-router";

const records: { [k: string]: string } = {};
let router: Router;

/**
 * install history plugin
 * @param r router instance
 */
export function installHistory(r: Router) {
    router = r;

    r.beforeEach(
        (
            _: RouteLocationNormalized,
            from: RouteLocationNormalized,
            next: NavigationGuardNext
        ) => {
            if (from.meta && from.meta.history) {
                records[`${from.meta.history}`] = from.fullPath;
            }
            next();
        }
    );
}

/**
 * redirect to history or fallback if no history exists.
 * @param name route name
 * @param fallback fallback address if route history not found
 */
export function pushHistory(name: string, fallback: RouteLocationRaw) {
    if (records[name]) {
        router.push(records[name]);
    } else {
        router.push(fallback);
    }
}

/**
 * redirect to history or fallback if no history exists.
 * @param name route name
 * @param fallback fallback address if route history not found
 */
export function replaceHistory(name: string, fallback: RouteLocationRaw) {
    if (records[name]) {
        router.replace(records[name]);
    } else {
        router.replace(fallback);
    }
}
