import React, { useState, useEffect } from 'react';
import { Files, Search, GitBranch, Blocks, Settings, Play, ChevronRight, ChevronDown, FileCode2, Terminal, MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './Contact.module.css';

const contactTitles = ["growth", "new projects", "ideas", "collaborations"];

const Contact = () => {
  const [view, setView] = useState('developer'); // 'standard' or 'developer'
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [activeFile, setActiveFile] = useState('contact.tsx');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % contactTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.header}>
        <h2 className={styles.title}>
          Let's work on<br/>
          <span style={{ display: 'inline-flex', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '4px' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTitleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                className={styles.titleHighlight}
                style={{ display: 'inline-block' }}
              >
                {contactTitles[currentTitleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>
        <p className={styles.subtitle}>
          Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className={styles.viewToggle}>
          <button 
            className={`${styles.toggleBtn} ${view === 'standard' ? styles.active : ''}`}
            onClick={() => setView('standard')}
          >
            <MessageSquare size={14} className={styles.toggleIcon} /> Standard
          </button>
          <button 
            className={`${styles.toggleBtn} ${view === 'developer' ? styles.active : ''}`}
            onClick={() => setView('developer')}
          >
            <Terminal size={14} className={styles.toggleIcon} /> Developer
          </button>
        </div>
      </div>

      {view === 'developer' ? (
        <div className={styles.ideContainer}>
        <div className={styles.ideTopBar}>
          <div className={styles.macButtons}>
            <div className={styles.macBtnBtnRed}></div>
            <div className={styles.macBtnBtnYellow}></div>
            <div className={styles.macBtnBtnGreen}></div>
          </div>
          <div className={styles.idePath}>
            portfolio &gt; src &gt; <span>{activeFile}</span>
          </div>
          <div className={styles.ideSearch}>
            <Search size={12} /> portfolio
          </div>
        </div>
        
        <div className={styles.ideBody}>
          <div className={styles.activityBar}>
            <div className={styles.activityTop}>
              <button className={`${styles.iconBtn} ${styles.activeIcon}`}><Files size={20} /></button>
              <button className={styles.iconBtn}><Search size={20} /></button>
              <button className={styles.iconBtn}><GitBranch size={20} /></button>
              <button className={styles.iconBtn}><Blocks size={20} /></button>
            </div>
            <div className={styles.activityBottom}>
              <button className={styles.iconBtn}><Settings size={20} /></button>
            </div>
          </div>
          
          <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>EXPLORER</div>
            <div className={styles.folderStructure}>
              <div className={styles.folder}>
                <ChevronDown size={14} /> PORTFOLIO
              </div>
              <div className={styles.subfolder}>
                <ChevronRight size={14} /> .next
              </div>
              <div className={styles.subfolderOpen}>
                <ChevronDown size={14} /> src
              </div>
              <div className={activeFile === 'contact.tsx' ? styles.fileActive : styles.file} onClick={() => setActiveFile('contact.tsx')}>
                <FileCode2 size={14} color="#519aba" /> contact.tsx
              </div>
              <div className={activeFile === 'socialLinks.tsx' ? styles.fileActive : styles.file} onClick={() => setActiveFile('socialLinks.tsx')}>
                <FileCode2 size={14} color="#fbc02d" /> socialLinks.tsx
              </div>
              <div className={styles.file}>
                <FileCode2 size={14} color="#519aba" /> globals.css
              </div>
            </div>
          </div>
          
          <div className={styles.editor}>
            <div className={styles.tabsBar}>
              <div className={activeFile === 'contact.tsx' ? styles.tabActive : styles.tab} onClick={() => setActiveFile('contact.tsx')}>
                <FileCode2 size={14} color="#519aba" /> contact.tsx {activeFile === 'contact.tsx' && <span>×</span>}
              </div>
              <div className={activeFile === 'socialLinks.tsx' ? styles.tabActive : styles.tab} onClick={() => setActiveFile('socialLinks.tsx')}>
                <FileCode2 size={14} color="#fbc02d" /> socialLinks.tsx {activeFile === 'socialLinks.tsx' && <span>×</span>}
              </div>
            </div>
            
            {activeFile === 'contact.tsx' && (
              <div className={styles.codeArea}>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>1</div><div className={styles.codeLine}><span className={styles.keyword}>const</span> <span className={styles.function}>sendMessage</span> = <span className={styles.keyword}>async</span> (data) =&gt; {'{'}</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>2</div><div className={styles.codeLineIndent}><span className={styles.property}>name:</span> <input type="text" className={styles.codeInput} placeholder='"Your Name"' /> ,</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>3</div><div className={styles.codeLineIndent}><span className={styles.property}>email:</span> <input type="text" className={styles.codeInput} placeholder='"you@email.com"' /> ,</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>4</div><div className={styles.codeLineIndent}><span className={styles.property}>message:</span><textarea className={styles.codeTextarea} placeholder='"Let&apos;s build something cool..."' defaultValue=""></textarea></div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>5</div><div className={styles.codeLine}>{'}'}</div>
                </div>
              </div>
            )}

            {activeFile === 'socialLinks.tsx' && (
              <div className={styles.codeArea}>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>1</div><div className={styles.codeLine}><span className={styles.keyword}>export const</span>&nbsp;<span className={styles.function}>socialLinks</span>&nbsp;= [</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>2</div><div className={styles.codeLineIndent}> {'{'}</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>3</div><div className={styles.codeLineDeepIndent}><span className={styles.property}>name:</span> <span className={styles.string}>"LinkedIn"</span>,</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>4</div><div className={styles.codeLineDeepIndent}><span className={styles.property}>url:</span> <span className={styles.string}>"https://www.linkedin.com/in/nabajyoti-kalita"</span>,</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>5</div><div className={styles.codeLineIndent}> {'}'},</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>6</div><div className={styles.codeLineIndent}> {'{'}</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>7</div><div className={styles.codeLineDeepIndent}><span className={styles.property}>name:</span> <span className={styles.string}>"GitHub"</span>,</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>8</div><div className={styles.codeLineDeepIndent}><span className={styles.property}>url:</span> <span className={styles.string}>"https://github.com/NabajyotiK06"</span>,</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>9</div><div className={styles.codeLineIndent}> {'}'},</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>10</div><div className={styles.codeLineIndent}> {'{'}</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>11</div><div className={styles.codeLineDeepIndent}><span className={styles.property}>name:</span> <span className={styles.string}>"Instagram"</span>,</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>12</div><div className={styles.codeLineDeepIndent}><span className={styles.property}>url:</span> <span className={styles.string}>"https://www.instagram.com/_naba.jyoti_/"</span>,</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>13</div><div className={styles.codeLineIndent}> {'}'}</div>
                </div>
                <div className={styles.lineWrapper}>
                  <div className={styles.lineNumber}>14</div><div className={styles.codeLine}>];</div>
                </div>
              </div>
            )}
            
            {activeFile === 'contact.tsx' && (
              <button className={styles.runBtn}>
                <Play size={14} color="#10b981" fill="#10b981" /> Run Script
              </button>
            )}
          </div>
        </div>
        </div>
      ) : (
        <div className={styles.standardContainer}>
          <form className={styles.standardForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea placeholder="Tell me about your project..." rows={6} required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn} onClick={(e) => e.preventDefault()}>
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Contact;
