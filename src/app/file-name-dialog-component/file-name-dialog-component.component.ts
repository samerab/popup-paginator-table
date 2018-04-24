import { Component, OnInit, Inject, HostBinding } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';


@Component({
  selector: 'app-file-name-dialog-component',
  templateUrl: './file-name-dialog-component.component.html',
  styleUrls: ['./file-name-dialog-component.component.css'],
  animations: [
    trigger('flyInOut', [
      
      transition(':enter', [
        animate(9500, keyframes([
          style({opacity: 1, transform: 'rotate(30deg)',     offset: 0}),
          style({opacity: .5, transform: 'rotate(60deg)', offset: 0.5}),
          style({opacity: 1, transform: 'rotate(0deg)',  offset: 1.0})
        ]))
      ])
      
    ])
  ]
  
})
export class FileNameDialogComponentComponent implements OnInit {
@HostBinding('@flyInOut') anim = true;
@HostBinding('style.backgroundColor') bg = 'blue';
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<FileNameDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      filename: this.data ? this.data.filename : ''
    })
  }

  submit(form) {
    //this.dialogRef.close(`${form.value.filename}`);
    this.dialogRef.close({filename: form.value.filename,
                         test: 'samoo'
    });
  }

}
