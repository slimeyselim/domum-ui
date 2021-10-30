import { Component, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit, OnChanges, OnDestroy {



  constructor(
    public dialogRef: MatDialogRef<SettingsDialogComponent>) {}

  ngOnInit() : void {
  }

  ngOnChanges():void{

  }

  ngOnDestroy():void{

  }

  closeDialog(){
    this.dialogRef.close();
  }

}
