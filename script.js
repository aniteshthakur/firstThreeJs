import * as Three from 'three';

const canvas=document.querySelector('canvas.webgl')

//Scene
const scene= new Three.Scene()

//Object
const geomatory= new  Three.BoxGeometry(1,1,1);
const material= new Three.MeshBasicMaterial({color:0xff0000,wireframe:true});
const mesh= new Three.Mesh(geomatory,material);
scene.add(mesh);

//Sizes
const sizes={
    width:800,
    height:600
}

//Camera
const camera= new Three.PerspectiveCamera(75,sizes.width/sizes.height);
camera.position.z=3
camera.position.x=-1
scene.add(camera)

//Renderer
const renderer= new Three.WebGLRenderer({canvas});

renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera);