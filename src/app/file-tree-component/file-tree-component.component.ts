import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FileNameDialogComponentComponent } from '../file-name-dialog-component/file-name-dialog-component.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-file-tree-component',
  templateUrl: './file-tree-component.component.html',
  styleUrls: ['./file-tree-component.component.css']
})
export class FileTreeComponentComponent implements OnInit {
  files;
  left;
  top;
  id = 0;
  fileNameDialogRef: MatDialogRef<FileNameDialogComponentComponent>;
  @HostBinding('style.backgroundColor') bg = 'blue';
  constructor(private dialog: MatDialog) {
    this.files = [];
    
  }

  openFileDialog(file?) {
    if(file){
      this.left = document.getElementById(file.id).offsetLeft+
                  document.getElementById(file.id).clientWidth;
      this.top = document.getElementById(file.id).offsetTop;
    }
    else{
      this.left = document.getElementById("btn").offsetLeft+
               document.getElementById("btn").clientWidth;
    this.top = document.getElementById("btn").offsetTop;
    }
    

    this.fileNameDialogRef = this.dialog.open(
      FileNameDialogComponentComponent, 
      {
        backdropClass: 'xxx',
        panelClass: 'vvv' ,
        disableClose: false,
        direction: 'ltr',
        position: {left: `${this.left}px`,
                   top: `${this.top}px`
                   },
        height: '200px',
        width: '1000px',
        hasBackdrop: true,
        data: {
          filename: file ? file.name : null
        }
      }
    );

    this.fileNameDialogRef.afterClosed().pipe(
      filter(name => name)
    ).subscribe(name => {
      
      if (file) {
        const index = this.files.findIndex(f => f.id == file.id);
        
        if (index !== -1) {
          this.files[index] = { id: file.id, name: name.filename, content: file.content }
        }
      } else {
        //var id = Math.floor(Math.random()*100);
        this.id++;
        this.files.push({ id: this.id, name: name.filename, content: ''});
      }
    });

  }

  ngOnInit() {
    
  }

}
