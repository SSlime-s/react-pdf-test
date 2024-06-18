"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "./tmp";

export default function PDF() {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
}
