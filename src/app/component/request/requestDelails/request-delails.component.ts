import { Status } from '../../../data/enum/status.enum';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { RequestsService } from '../request.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-request-delails',
  templateUrl: './request-delails.component.html',
  styleUrls: ['./request-delails.component.css']
})
export class RequestDelailsComponent implements OnInit{
  idRequest: number;
  currentStep;
  isLinear = true;
  statusRequest = Status;
  requestDetail:any;
  currentStatus: number;
  form: FormGroup;
  imagePreview: string | ArrayBuffer;
  constructor(private requestsService :RequestsService, public route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if(params['idRequest']){
          this.idRequest = params['idRequest'];
        }
      }
    ); 
    debugger;
    this.form = new FormGroup({
      image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]})
    });
    debugger;
    this.requestDetail = this.requestsService.getRequestDetail(this.idRequest); 
    //this.currentStatus = this.requestDetail.status.value;
    debugger;
    
  }
  onImagePicked(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    debugger;
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
  sendComment(){
    
  }
  }
