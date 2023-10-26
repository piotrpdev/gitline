import CryptoJS from "crypto-js";

declare var jsgl: any;


	export function indexToX(index: number): number {
		return index * 20 + 12;
	}

	export class Config {
		public dotHeight = 6;
		public dotWidth = 8;

		public remoteOnly: boolean = false;

		private avatar_gravatar(email) {
			return "http://www.gravatar.com/avatar/" + CryptoJS.MD5(email.toLowerCase()) + "?s=20&d=mm";
		}

		public avatars: Function[] = [this.avatar_gravatar];
	}