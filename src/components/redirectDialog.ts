import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';

export class redirectDialog extends BaseDialog {
  
  
  private _message: string = '';

  public message(value: string): void {
    this._message = value;
  }

  public render(): void {
    // Create simple DOM structure
    this.domElement.innerHTML = `
      <div style="
          padding: 20px;
          text-align: center;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgb(0, 120, 212);
        ">
        <h2 style="margin-bottom: 20px;">${this._message}</h2>
        <p style='margin:0px;'>Welcome to GCXchange, the Government of Canada's new space for collaboration<br>
            and career opportunities. Here you'll find the Career Marketplace and communities<br>
            for connecting with other public servants. Don't forget to update your bookmarks!
        </p>
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
            Explore GCXchange
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
            Browse the Career Marketplace
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
                console.log("clicked")
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
