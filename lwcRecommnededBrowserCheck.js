import { LightningElement ,track} from 'lwc';
const sUsrAg = navigator.userAgent;
export default class LwcRecommnededBrowserCheck extends LightningElement {
    @track ieBrowserType ;
    @track browserRecommendationMessage = 'For best performance of this application, please use the latest version of Chrome, Firefox,or Safari(on Mac OS).'
    connectedCallback(){
        if (sUsrAg.indexOf("Trident") > -1) {
            this.ieBrowserType = true;
        }
        else{
            this.ieBrowserType = false;
        }
    }
}