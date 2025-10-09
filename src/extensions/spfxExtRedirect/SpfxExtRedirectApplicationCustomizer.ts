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

    //Search for the parameter in the URL
    const params = new URLSearchParams(window.location.search);
    console.log("CURRENT URL", params);

    //Change the parameter name to whatever you want to search for
    const myParam = params.get('JobOpportunityId');
    console.log("MY PARAM", myParam);

    //render the dialog if the parameter is found in the URL
    if (myParam) {
     await  this._renderDialog();
    }


    //this.context.application.navigatedEvent.add(this, this._renderDialog);


    return Promise.resolve();
  }

  private async _renderDialog(): Promise<void> {
    console.log("RENDER DIALOG ")

    const Lan = document.querySelector('[data-automation-id="LanguageSelector"]');
  
    const dialog = new redirectDialog();
    dialog._Dialoglanguage(Lan?.textContent || '');
    await dialog.show();


    }

}
