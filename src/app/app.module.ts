import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostComponent } from './post/post.component';

import { PostsService} from './services/posts.service';
import { NewpostComponent } from './postlist/newpost/newpost.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {path: 'posts', component: PostlistComponent},
  {path: 'newpost', component: NewpostComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostComponent,
    NewpostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
