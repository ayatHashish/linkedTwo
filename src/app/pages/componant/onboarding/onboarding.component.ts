import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TranslationService } from 'src/app/shared/services/i18n/translation.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService ,
     public translationService: TranslationService,) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onUpload(event: { files: any; }) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}
