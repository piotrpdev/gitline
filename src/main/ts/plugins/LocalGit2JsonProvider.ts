import { getJSON } from "jquery"
import { CommitProvider } from "../CommitProvider";
	
	export class LocalGit2JsonProvider extends CommitProvider {

		public onRequested(url: string) {
			var xhr = getJSON(url, {});

			xhr.done((json) => {
				this.whenDone(json);
			});

			xhr.fail(() => {
				this.error("Error loading git data from " + url + " create it using git2json");
			});
		}
	}