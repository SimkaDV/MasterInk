import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BtnToggleContent.css";

export function BtnToggleContent({ content, icon, titleContent }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`btnTogCont ${!isOpen ? "btnTogContNoActiv" : ""}`}>
      <div className="btnHeaderRow">
        <button
          className={`btnTog ${isOpen ? "btnActiv" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {icon}
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="titleOption"
              className="togContHeaderTitle"
              initial={{ width: 0,}}
              animate={{ width: "auto",}}
              exit={{ width: 0,}}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            >
              {titleContent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="innerContent"
            initial={{ height: 0, width: 0, }}
            animate={{ height: "auto",width: "auto", }}
            exit={{ height: 0, width: 0,}}
            transition={{ duration: 0.4 }}
            style={{ overflow: "hidden" }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}