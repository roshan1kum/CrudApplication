import { NgModule } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';






@NgModule({
    imports:[MatMenuModule,MatButtonModule,MatToolbarModule,MatIconModule,MatCardModule,MatFormFieldModule,MatTableModule,MatPaginatorModule,MatInputModule],
    exports:[MatMenuModule,MatButtonModule,MatToolbarModule,MatIconModule,MatCardModule,MatFormFieldModule,MatTableModule,MatPaginatorModule,MatInputModule]
})

export class MaterialModule{

}