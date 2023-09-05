import { UploadService } from './upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public progress: number = 0;
  public message: string = '';
  public loading: boolean = false;
  public selectedFiles: FileList | null = null;

  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {}

  onFileChange(event: any) {
    this.selectedFiles = event.target.files;
  }

  async uploadFiles() {
    if (!this.selectedFiles || this.selectedFiles.length === 0) return;
  
    this.loading = true;
    this.progress = 0;
    this.message = '';
  
    try {
      const filesArray = Array.from(this.selectedFiles);
      for (const file of filesArray) {
        await this.uploadFile(file);
      }
      this.message = 'Todos os arquivos foram enviados com sucesso';
    } catch (error) {
      console.error('Erro no upload:', error);
      this.message = 'Falha no upload';
    } finally {
      this.loading = false;
    }
  }
  

  async uploadFile(file: File) {
    try {
      const fileList = new DataTransfer(); // Cria um novo DataTransfer
      fileList.items.add(file); // Adiciona o arquivo ao DataTransfer
      const progress = await this.uploadService.upload(fileList.files);
      this.progress = progress;
    
      if (progress === 100) {
        this.message = `Upload do arquivo ${file.name} realizado com sucesso`;
      }
    } catch (error) {
      console.error(`Erro no upload do arquivo ${file.name}:`, error);
      this.message = `Falha no upload do arquivo ${file.name}`;
      throw error;
    }
  }
  
  
  
  cancelUpload() {
    this.loading = false;
    this.progress = 0;
    this.message = 'Upload cancelado';
  }
}
