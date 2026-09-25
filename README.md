# 🌾 GramBandhan — Farmer Portal & Admin Control Hub
### Official Repository for Jony (`jony_today_25`)

This repository contains the standalone **Farmer Portal** and **Admin Control Hub** for the GramBandhan Rural Agri-FinTech Platform.

---

## 🏛️ Core Modules Included

### 1. 🧑‍🌾 Farmer Portal (`Farmer/`)
- **`Farmer/farmer.html`**: Dedicated agricultural producer workspace.
- **Features**:
  - Live Harvest Recording & Crop Yield telemetry.
  - Land title & Farm parcel verification status.
  - Capital disbursement progress & payout records.
  - Agronomist inspection log feeds.

### 2. 🛡️ Admin & Staff Portal (`Admin/`)
- **`Admin/admin.html`**: Administrative and compliance management center.
- **Features**:
  - **National ID KYC Queue**: Review and verify Farmer credentials.
  - **Deal Approval Engine**: Approve agricultural campaigns for public funding.
  - **Escrow Settlement Release**: Disburse funds directly on Base Sepolia blockchain.
  - **Inter-Role Communication Relay**: Broadcast urgent notices and updates across the platform.

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser to:
- **Farmer Portal**: `http://localhost:5173/Farmer/farmer.html`
- **Admin Console**: `http://localhost:5173/Admin/admin.html`

### 3. Build for Production
```bash
npm run build
```

---

## 🔗 Key Route Index

| Portal / View | Local URL |
| :--- | :--- |
| **Farmer Dashboard** | `http://localhost:5173/Farmer/farmer.html` |
| **Admin Panel** | `http://localhost:5173/Admin/admin.html` |
