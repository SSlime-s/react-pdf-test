"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "./tmp";

export function PDF() {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
}
