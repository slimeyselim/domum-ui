import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { SettingsDialogComponent } from '../settings/settings-dialog.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy, OnChanges {
  title:string = 'Domum';
  dialogRef$:Subscription;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngOnChanges():void {

  }

  ngOnDestroy():void {
    this.dialogRef$.unsubscribe();
  }

  OpenSettings(): void {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {width: '250px'});

    this.dialogRef$ = dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog closed");
    });

  }

}
