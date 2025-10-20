import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';

export class redirectDialog extends BaseDialog {
  
  private _language: string = '';


  public _Dialoglanguage(value: string): void {
    const languageValue = value.startsWith("Fr") ? this._language = "fr" : this._language = "en";
    this._language = languageValue;
  }

  public render(): void {


    const title = this._language === "fr" ? 'GCConnex à été déplacé à GCÉchange!' : 'GCConnex has moved to GCXchange!';
    const bodyText = this._language === "fr" ?
    `<p>Bienvenue sur GCÉchange, le nouvel espace du gouvernement du Canada dédié à la collaboration et aux possibilités de carrière. <br> Vous y trouverez le Marché de Carrière et des communautés qui vous permettront de vous connecter avec d’autres fonctionnaires. N'oubliez pas de mettre à jour vos signets!</p>`
    : `Welcome to GCXchange, the Government of Canada's new space for collaboration and career opportunities. <br> Here you'll find the Career Marketplace and communities for connecting with other public servants. Don't forget to update your bookmarks!`;

    const exploreBtnText = this._language === "fr" ? 'Explorer GCÉchange' : 'Explore GCXchange';
    const careerMarketPlaceBtnText = this._language === "fr" ? 'Consulter le Marché de Carrière' : 'Browse the Career Marketplace';


    this.domElement.innerHTML = `
      <div
        id="redirectDialog"
        role=dialog 
        aria-modal="true"
        aria-labelledby="dialogTitle"
        aria-describedby="dialogBody"
        style="
        padding: 50px;
        text-align: center;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(204, 207, 207, 1);
        ">
        <h2 id="dialogTitle" style="margin-bottom: 20px;">${title}</h2>
        <div id="dialogBody" style='margin:0px; margin-bottom: 20px'>${bodyText}</div>
        <div style="margin-top: 30px; display: flex; justify-content: space-evenly; gap: 10px;">
            <button id="exploreBtn" 
            style="
                background-color: #0078d4;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
            ">
            ${exploreBtnText}
            </button>
            <button id="careerMarketPlaceBtn" 
            style="
                background-color: #03787c;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
            "
            >
            ${careerMarketPlaceBtnText}
            </button>
        </div>
      </div>
    `;

    // Attach close button handler
    this.buttonHandler();
  
  }

  public  buttonHandler(): void  {

    const exploreBtn = this.domElement.querySelector('#exploreBtn');
    const careerMarketPlaceBtn = this.domElement.querySelector('#careerMarketPlaceBtn');

    try {
            if (exploreBtn) {
                exploreBtn.addEventListener('click', async () => {
                    await this.close();
                    window.location.href = 'https://devgcx.sharepoint.com/';
                })
            } 
    
            if (careerMarketPlaceBtn) {
                careerMarketPlaceBtn.addEventListener('click', async () => {
                await this.close();
                    window.location.href = 'https://devgcx.sharepoint.com/sites/CM-test/';
                });

            }
        }
    catch(e) {
        console.log(e)
    }
     
  }

  public getConfig(): IDialogConfiguration {
    return { isBlocking: true };
  }

  protected onAfterClose(): void {
    super.onAfterClose();
    this.domElement.innerHTML = ''; // cleanup DOM after closing
  }
}
