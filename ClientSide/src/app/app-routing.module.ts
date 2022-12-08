import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ParseComponent } from './parser/parser.component';
import { PdfToTextConvertorComponent } from './pdf-to-text-convertor/pdf-to-text-convertor.component';
import { SearchMatchingWordsComponent } from './searchMatchingWords/search-matching-words.component';
import { SearchRelatedArticleComponent } from './SearchRelatedArticle/search-related-article.component';

const routes: Routes=[{path:'',redirectTo:'parser',pathMatch:'full'},
{path:'parser',component: ParseComponent},
{path:'pdftotext',component: PdfToTextConvertorComponent},
{path:'searchMatchingWords',component : SearchMatchingWordsComponent},
{path:'SearchRelatedArticle', component: SearchRelatedArticleComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
