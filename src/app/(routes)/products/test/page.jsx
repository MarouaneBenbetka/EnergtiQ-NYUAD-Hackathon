"use client";

import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

// Import the component with dynamic import to avoid SSR issues with Three.js
const MoleculeViewer = dynamic(
	() => import("../../../../components/viewers/MoleculeViewer.jsx"),
	{
		ssr: false,
	}
);

export default function MoleculeViewerPage() {
	const [selectedMolecule, setSelectedMolecule] = useState("H2O");
	const [showLabels, setShowLabels] = useState(true);

	const molecules = ["H2", "H2O", "CH4"];

	return (
		<div
			className="container"
			style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
		>
			<Head>
				<title>3D Molecule Viewer</title>
				<meta
					name="description"
					content="View 3D molecular structures"
				/>
			</Head>

			<main>
				<h1 style={{ textAlign: "center", marginBottom: "20px" }}>
					3D Molecule Viewer
				</h1>

				<div style={{ marginBottom: "20px", textAlign: "center" }}>
					<div style={{ marginBottom: "10px" }}>
						<label style={{ marginRight: "10px" }}>
							Select Molecule:
						</label>
						<select
							value={selectedMolecule}
							onChange={(e) =>
								setSelectedMolecule(e.target.value)
							}
							style={{ padding: "8px", borderRadius: "4px" }}
						>
							{molecules.map((molecule) => (
								<option key={molecule} value={molecule}>
									{molecule}
								</option>
							))}
						</select>
					</div>

					<div>
						<label style={{ marginRight: "10px" }}>
							<input
								type="checkbox"
								checked={showLabels}
								onChange={() => setShowLabels(!showLabels)}
							/>
							Show Element Labels
						</label>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						border: "1px solid #ddd",
						borderRadius: "8px",
						padding: "10px",
						background: "#f9f9f9",
					}}
				>
					<MoleculeViewer
						moleculeName={selectedMolecule}
						width={500}
						height={400}
						showLabels={showLabels}
					/>
				</div>

				<div style={{ marginTop: "20px", textAlign: "center" }}>
					<p>
						This interactive 3D viewer allows you to rotate, pan,
						and zoom the molecular model.
						<br />
						Use mouse to rotate, scroll to zoom, and right-click +
						drag to pan.
					</p>
				</div>
			</main>
		</div>
	);
}
