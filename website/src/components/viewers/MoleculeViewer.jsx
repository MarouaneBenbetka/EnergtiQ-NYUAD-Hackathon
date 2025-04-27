"use client";

import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import {
	CSS2DRenderer,
	CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";

// Basic molecule data - atoms and their positions
const MOLECULES = {
	H2: {
		atoms: [
			{ element: "H", position: [-0.3, 0, 0], color: 0xffffff },
			{ element: "H", position: [0.3, 0, 0], color: 0xffffff },
		],
		bonds: [{ start: 0, end: 1 }],
	},
	H2O: {
		atoms: [
			{ element: "O", position: [0, 0, 0], color: 0xff0000 },
			{ element: "H", position: [-0.5, 0.5, 0], color: 0xffffff },
			{ element: "H", position: [0.5, 0.5, 0], color: 0xffffff },
		],
		bonds: [
			{ start: 0, end: 1 },
			{ start: 0, end: 2 },
		],
	},
	CH4: {
		atoms: [
			{ element: "C", position: [0, 0, 0], color: 0x333333 },
			{ element: "H", position: [0.5, 0.5, 0.5], color: 0xffffff },
			{ element: "H", position: [-0.5, -0.5, 0.5], color: 0xffffff },
			{ element: "H", position: [0.5, -0.5, -0.5], color: 0xffffff },
			{ element: "H", position: [-0.5, 0.5, -0.5], color: 0xffffff },
		],
		bonds: [
			{ start: 0, end: 1 },
			{ start: 0, end: 2 },
			{ start: 0, end: 3 },
			{ start: 0, end: 4 },
		],
	},
};

// Atom size mapping
const ATOM_SIZE = {
	H: 0.2,
	O: 0.4,
	C: 0.4,
	N: 0.4,
};

const MoleculeViewer = ({
	moleculeName = "H2O",
	width = 400,
	height = 300,
	showLabels = true,
}) => {
	const containerRef = useRef(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (!isClient || !containerRef.current) return;

		// Get molecule data
		const moleculeData = MOLECULES[moleculeName] || MOLECULES.H2O;

		// Setup scene
		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0xf0f0f0);

		// Setup camera
		const camera = new THREE.PerspectiveCamera(
			75,
			width / height,
			0.1,
			1000
		);
		camera.position.z = 3;

		// Setup renderer
		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(width, height);
		containerRef.current.innerHTML = "";
		containerRef.current.appendChild(renderer.domElement);

		// Setup label renderer
		const labelRenderer = new CSS2DRenderer();
		labelRenderer.setSize(width, height);
		labelRenderer.domElement.style.position = "absolute";
		labelRenderer.domElement.style.top = "0px";
		labelRenderer.domElement.style.pointerEvents = "none";
		containerRef.current.appendChild(labelRenderer.domElement);

		// Setup controls
		const controls = new TrackballControls(camera, renderer.domElement);
		controls.rotateSpeed = 2.0;
		controls.zoomSpeed = 1.2;
		controls.panSpeed = 0.8;
		controls.noZoom = false;
		controls.noPan = false;
		controls.staticMoving = true;
		controls.dynamicDampingFactor = 0.3;

		// Add atoms
		const atomObjects = [];
		moleculeData.atoms.forEach((atom, index) => {
			const geometry = new THREE.SphereGeometry(
				ATOM_SIZE[atom.element] || 0.3,
				32,
				32
			);
			const material = new THREE.MeshPhongMaterial({ color: atom.color });
			const sphere = new THREE.Mesh(geometry, material);
			sphere.position.set(...atom.position);
			scene.add(sphere);
			atomObjects.push(sphere);

			// Add label if enabled
			if (showLabels) {
				const div = document.createElement("div");
				div.className = "atom-label";
				div.textContent = atom.element;
				div.style.color = "#000000";
				div.style.fontSize = "12px";
				div.style.fontWeight = "bold";
				div.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
				div.style.padding = "2px 5px";
				div.style.borderRadius = "3px";

				const label = new CSS2DObject(div);
				label.position.set(...atom.position);
				sphere.add(label);
			}
		});

		// Add bonds
		moleculeData.bonds.forEach((bond) => {
			const start = new THREE.Vector3(
				...moleculeData.atoms[bond.start].position
			);
			const end = new THREE.Vector3(
				...moleculeData.atoms[bond.end].position
			);

			const direction = new THREE.Vector3().subVectors(end, start);
			const length = direction.length();

			const bondGeometry = new THREE.CylinderGeometry(
				0.05,
				0.05,
				length,
				8
			);
			const bondMaterial = new THREE.MeshPhongMaterial({
				color: 0x999999,
			});

			const bondMesh = new THREE.Mesh(bondGeometry, bondMaterial);

			// Position bond at midpoint and orient
			bondMesh.position.copy(start);
			bondMesh.position.lerp(end, 0.5);
			bondMesh.lookAt(end);
			bondMesh.rotateX(Math.PI / 2);

			scene.add(bondMesh);
		});

		// Add lights
		const ambientLight = new THREE.AmbientLight(0x404040);
		scene.add(ambientLight);

		const light1 = new THREE.DirectionalLight(0xffffff, 1);
		light1.position.set(1, 1, 1);
		scene.add(light1);

		const light2 = new THREE.DirectionalLight(0xffffff, 0.8);
		light2.position.set(-1, -1, -1);
		scene.add(light2);

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);
			controls.update();
			renderer.render(scene, camera);
			labelRenderer.render(scene, camera);
		};

		animate();

		// Cleanup
		return () => {
			if (containerRef.current) {
				containerRef.current.innerHTML = "";
			}
			renderer.dispose();
			controls.dispose();
		};
	}, [isClient, moleculeName, width, height, showLabels]);

	if (!isClient) {
		return (
			<div
				ref={containerRef}
				style={{ width, height, background: "#f0f0f0" }}
			>
				Loading...
			</div>
		);
	}

	return (
		<div
			ref={containerRef}
			style={{ width, height, position: "relative" }}
		></div>
	);
};

export default MoleculeViewer;
