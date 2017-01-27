import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { Reddits } from '../pages/reddits/reddits';
import { SettingsPage } from '../pages/settings/settings';
import {DetailsPage} from '../pages/details/details';
import { TabsPage } from '../pages/tabs/tabs';
import { CommentsPage } from '../pages/comments/comments';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    Reddits,
    SettingsPage,
    DetailsPage,
    TabsPage,
    CommentsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    Reddits,
    SettingsPage,
     DetailsPage,
    TabsPage,
    CommentsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
