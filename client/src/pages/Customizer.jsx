import React, { useEffect, useState } from "react"
import { useSnapshot } from "valtio";
import { motion, AnimatePresence } from 'framer-motion';
import state from "../store";
import config from '../config/config';
import { download } from '../assets'
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';

import {
  CustomButton
  , AIPicker
  , ColorPicker
  , FilePicker
  , Tab
} from '../components';

const Customizer = () => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState('');

  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });


  const generateTabContent = ()=>{
    switch(activeEditorTab){
      case "aipicker":
        return <AIPicker />;
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker />;
      default:
        return <></>
    }
  }


  return (
    <AnimatePresence>
      {!snap.intro && (
        <>

        {/************* Side Tabs for Customisation ****************/}
          <motion.div
          key = "custom"
          className="absolute top-0 left-0 z-10" {...slideAnimation('left')}>

          <div className="flex item-center min-h-screen">
            <div className="editortabs-container tabs mt-auto mb-auto">
            {EditorTabs.map((tab)=>(<Tab 
              key={tab.name}
              tab = {tab}
              handleClick = {() => setActiveEditorTab(tab.name)}
            />))}

            {generateTabContent()}

            </div>
          </div>

          </motion.div>


          {/************* Go Back Button *************/}
          <motion.div
          className="absolute z-10 top-5 right-5 " {...fadeAnimation}>
            <CustomButton
            type="filled"
            title="Go Back"
            handleClick={()=>{state.intro = true}}
              customStyles='w-fit px-4 py-2.5 font-bold text-sm'
            />

          </motion.div>

            
            <motion.div className="filtertabs-container" {...slideAnimation('up')}>
            
            {FilterTabs.map((tab)=>(<Tab 
              key={tab.name}
              tab = {tab}
              isFilterTab
              isActiveTab=""
              handleClick = {() => {}}
            />))}

            
            </motion.div>


        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer