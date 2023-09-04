import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  public upload(files: FileList): Promise<number> {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }

    return fetch('http://localhost:8080/api/upload', {
      method: 'POST',
      body: formData
    }).then(response => {
      if (!response.ok) {
        throw new Error('Falha no upload');
      }
      return response;
    }).then(() => {
      return 100; // Upload concluído
    }).catch(error => {
      console.error('Erro no upload:', error);
      return 0; // Retorna um valor padrão em caso de erro
    });
  }
}
