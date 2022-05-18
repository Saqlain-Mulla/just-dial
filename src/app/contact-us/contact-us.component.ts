import { Component, OnInit } from '@angular/core';
import { BaseConfigService } from '../base-config.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private baseConfig : BaseConfigService) { }

  ngOnInit(): void {
  }

}
