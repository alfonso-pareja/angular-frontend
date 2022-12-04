import { Injectable } from "@angular/core";
import { 
    NbComponentStatus, 
    NbGlobalPhysicalPosition, 
    NbToastrService 
} from "@nebular/theme";

@Injectable()
export class UtilService {
    
    constructor(
        private toastrService: NbToastrService){}



    public showToast(type: NbComponentStatus, title: string, body: string) {
        const config = {
            status: type,
            destroyByClick: true,
            duration: 3000,
            hasIcon: false,
            position: NbGlobalPhysicalPosition.TOP_RIGHT,
            preventDuplicates: false,
        };

        this.toastrService.show(body, title, config);
    }
}