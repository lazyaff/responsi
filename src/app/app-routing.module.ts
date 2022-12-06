import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then(m => m.NotesPageModule),
    canLoad: [AuthGuard]
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'add-note',
    loadChildren: () => import('./add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'edit-note/:id_note',
    loadChildren: () => import('./edit-note/edit-note.module').then( m => m.EditNotePageModule)
  },
  {
    path: 'show-note/:id_note',
    loadChildren: () => import('./show-note/show-note.module').then( m => m.ShowNotePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
