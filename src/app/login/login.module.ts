import {NgModule} from "@angular/core";
import {MaterialModules} from "../material.module";
import {LoginComponent} from "./login.component";
import {FormsModule} from '@angular/forms';
import {DataFetcherService} from "../http/data_fetcher.service";
import {UserManager} from "../manager/user.manager";
import {UserTransformer} from "../transformer/user.transformer";
import {AccessManager} from "../manager/access.manager";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        MaterialModules,
        FormsModule
    ],
    providers: [
        UserManager,
        DataFetcherService,
        UserTransformer,
        AccessManager
    ],
    exports: [LoginComponent]
})

export class LoginModule {

}
