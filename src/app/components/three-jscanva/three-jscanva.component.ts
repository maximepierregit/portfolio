import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

@Component({
  selector: 'app-three-jscanva',
  template: '<div #container></div>',
  styleUrls: ['./three-jscanva.component.scss']
})
export class ThreeJSCanvaComponent implements OnInit {
  @ViewChild('container', { static: true })
  containerRef!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private torus!: THREE.Mesh; // Declare the cube as a class property
  mouse: THREE.Vector2 = new THREE.Vector2;
  raycaster: THREE.Raycaster = new THREE.Raycaster;
  isHovered: boolean = false;

  constructor() {}

  ngOnInit() {
    this.initScene();
    this.animate(); // Call the animate function after initializing the scene
  }

  private initScene(): void {
    this.isHovered = false;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    // Create the scene
    this.scene = new THREE.Scene();

    const loader = new GLTFLoader();
    loader.load('/src/assets/models/chara.glb',  (gltf) => {
      gltf.scene.scale.set(0.5, 0.5, 0.5);
      gltf.scene.position.set(0, -1, 0);
      gltf.scene.rotation.y = Math.PI / 2;
      this.scene.add(gltf.scene);
    }, undefined, function (error) {
      console.error(error);
    });

    // Create and position the camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 30;

    // Create and configure the WebGL renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x9f0240, 0);
    this.renderer.setSize(200, 200);

    this.camera.aspect = 200 / 200;
    this.camera.updateProjectionMatrix();


    // Add the WebGL renderer to the DOM
    this.containerRef.nativeElement.appendChild(this.renderer.domElement);

    // Create a cube and add it to the scene
    const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
    this.torus = new THREE.Mesh(geometry, material); // Assign the cube to the class property
    this.scene.add(this.torus);

    this.renderer.domElement.addEventListener('mousemove', (event) => {
      // Calculez les coordonnées normalisées de la souris
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
      // Mettez à jour le raycaster avec la position de la souris et la caméra
      this.raycaster.setFromCamera(this.mouse, this.camera);
    
      // Trouvez les intersections entre le raycaster et les objets de la scène
      const intersects = this.raycaster.intersectObjects(this.scene.children);
    
      // Si le torus est intersecté, effectuez l'action souhaitée
      if (intersects.length > 0 && intersects[0].object === this.torus) {
        this.torus.rotation.z += 0.01;
        this.isHovered = true;
      }
      else {
        this.isHovered = false;
      }
    });
    


    this.renderer.render(this.scene, this.camera);
  }

  // Add the animate function
  private animate(): void {
    requestAnimationFrame(() => this.animate());

    // Update the cube's rotation
    this.torus.rotation.x += 0.00001;
    this.torus.rotation.y += 0.00001;
    this.isHovered ? this.torus.rotation.z += 0.01 : this.torus.rotation.z += 0;

    // Render the updated scene
    this.renderer.render(this.scene, this.camera);
  }

  
}
