import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-page',
  template: '<div #container></div>',
  styleUrls: ['./three-page.component.scss']
})
export class ThreePageComponent implements OnInit {
  @ViewChild('container', { static: true })
  containerRef!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  constructor() {}

  ngOnInit() {
    this.initScene();
    this.animate();
  }

  private initScene(): void {
    // Créez la scène
    this.scene = new THREE.Scene();

    // Créez et positionnez la caméra
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // Créez et configurez le rendu WebGL
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xa374f1, 1);
    this.renderer.setSize(500, 500);

    // Ajoutez le rendu WebGL au DOM
    this.containerRef.nativeElement.appendChild(this.renderer.domElement);

    // Créez un cube et ajoutez-le à la scène
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);
  }

  private animate(): void {
    requestAnimationFrame(() => {
      this.animate();
    });

    // Mettez à jour la scène
    this.renderer.render(this.scene, this.camera);
  }
}
