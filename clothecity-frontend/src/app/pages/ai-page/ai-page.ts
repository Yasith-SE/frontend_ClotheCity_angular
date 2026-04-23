import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import '@google/model-viewer';

@Component({
  selector: 'app-ai-page',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, SidebarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './ai-page.html',
  styleUrls: ['./ai-page.css']
})
export class AiPageComponent {
  currentAvatar: string = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb';
  promptText: string = '';
  isGenerating: boolean = false;

  changeClothes(clothType: string) {
    if (clothType === 'leather-jacket') {
      this.currentAvatar = 'assets/models/avatar-jacket.glb';
    } else if (clothType === 'red-dress') {
      this.currentAvatar = 'assets/models/avatar-dress.glb';
    }
  }

  generateAiStyle() {
    if (!this.promptText.trim()) return;
    this.isGenerating = true;

    setTimeout(() => {
      this.isGenerating = false;
      this.currentAvatar = 'assets/models/avatar-cyberpunk.glb';
      this.promptText = ''; 
    }, 3000);
  }
}