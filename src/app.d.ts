// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface ViewTransition {
		readonly ready: Promise<void>;
		readonly finished: Promise<void>;
		readonly updateCallbackDone: Promise<void>;
	}
	interface Document {
		startViewTransition?(updateCallback?: () => void | Promise<void>): ViewTransition;
	}
}

export {};
