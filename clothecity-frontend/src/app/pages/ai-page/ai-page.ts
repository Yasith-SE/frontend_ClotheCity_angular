
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import '@google/model-viewer'; // Imports the 3D engine

@Component({
  selector: 'app-ai-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // CRITICAL: Allows the 3D viewer tag
  templateUrl: './ai-page.html',
  styleUrls: ['./ai-page.css']
})
export class AiPageComponent {
  promptText: string = '';
  isGenerating: boolean = false;

  generateStyle() {
    if (!this.promptText) return;
    this.isGenerating = true;

    // Fake AI generation delay (3 seconds)
    setTimeout(() => {
      this.isGenerating = false;
      alert('AI generation complete! (Later, we will swap the 3D texture here)');
    }, 3000);
  }
}