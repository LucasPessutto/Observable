import { GenRandomDataService } from './../gen-random-data.service';
import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { DataModel } from '../datamodel.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  public subject!: Subject<DataModel>
  public replaySubject!: ReplaySubject<DataModel>
  public asyncSubject!: AsyncSubject<DataModel>
  public behaviorSubject!: BehaviorSubject<DataModel>

  constructor(private genDataService: GenRandomDataService) { }

  ngOnInit(): void {
  this.subject = new Subject<DataModel>()
  this.replaySubject = new ReplaySubject<DataModel>()
  this.asyncSubject = new AsyncSubject<DataModel>()
  this.behaviorSubject = new BehaviorSubject<DataModel>({timeStamp: 0, data: 0})

  this.genDataService.dataObservable.subscribe(this.subject)
  this.genDataService.dataObservable.subscribe(this.replaySubject)
  this.genDataService.dataObservable.subscribe(this.asyncSubject)
  this.genDataService.dataObservable.subscribe(this.behaviorSubject)

  }

  connect() {
    this.genDataService.dataObservable.connect()
  }

}
