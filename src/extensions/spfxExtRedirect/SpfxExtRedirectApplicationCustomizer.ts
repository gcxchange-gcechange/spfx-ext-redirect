import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import {  IDialogConfiguration } from '@microsoft/sp-dialog';

import * as strings from 'SpfxExtRedirectApplicationCustomizerStrings';
import { redirectDialog } from '../../components/redirectDialog';

const LOG_SOURCE: string = 'SpfxExtRedirectApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpfxExtRedirectApplicationCustomizerProperties {

}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpfxExtRedirectApplicationCustomizer
  extends BaseApplicationCustomizer<ISpfxExtRedirectApplicationCustomizerProperties> {

    public getConfig(): IDialogConfiguration {
      return {
        isBlocking: false,
      };
    }

  public async onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    try {
      console.log("TRY")
      const dialog: redirectDialog = new redirectDialog();
      dialog.message(`GCConnex has moved to GCXchange!`);
      await dialog.show()
      .then(() => {
        console.log('Dialog closed');
      });
    }catch(e) {
      console.log("CATCH", e)
    }
  
  

    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {
    //   /* handle error */
    //   console.log("ERROR")
    // });


    return Promise.resolve();
  }


}
