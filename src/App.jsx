import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  GraduationCap,
  HelpCircle,
  Layers3,
  Mail,
  MessageSquareText,
  Scale,
  ShieldCheck,
} from "lucide-react";

const navItems = [
  ["Model", "model"],
  ["Process", "process"],
  ["AI Studio Setup", "studio"],
  ["Student Guide", "student-guide"],
  ["System Prompt", "system-prompt"],
  ["Rubric", "rubric"],
  ["Grading Logic", "grading"],
  ["Samples", "samples"],
  ["Templates", "templates"],
  ["FAQ", "faq"],
];

const sourceFiles = [
  {
    title: "Prompt.docx",
    detail: "Website brief requiring a professional academic site and detailed explanation of the full model.",
  },
  {
    title: "Ethics of Care_Instructions.docx",
    detail: "Student-facing instructions for using Google AI Studio as a learning process, not as instant answer production.",
  },
  {
    title: "01_System Prompt.docx",
    detail: "System prompt that turns Gemini into an Educational AI Tutor for deontological ethics.",
  },
  {
    title: "Assignment Sample.docx",
    detail: "Google AI Studio transcript sample showing setup, student prompts, tutor responses, and final essay generation.",
  },
  {
    title: "Rubric Sample.docx",
    detail: "A 30-mark Buddhist ethics rubric using the same process-based assessment criteria.",
  },
  {
    title: "Agents.md",
    detail: "Codex grading-agent instructions for strict transcript-based grading of a Familiar Technology Essay.",
  },
];

const principles = [
  ["AI as a learning partner", "Students use AI to clarify concepts, test examples, compare theories, and refine reasoning."],
  ["Student-led conversation", "The student must ask meaningful questions, set direction, and sustain the interaction."],
  ["Transcript as learning evidence", "The chat log shows whether the student learned, questioned, revised, and applied ideas."],
  ["Process-based grading", "Marks reward agency, strategic prompting, reflection, development, and learning transfer."],
];

const processStages = [
  {
    stage: "Stage 1",
    title: "Teacher designs the assignment",
    text: "The teacher prepares the title, objectives, student instructions, AI workflow, system prompt, rubric, submission requirements, and assessment-agent instructions when AI-assisted grading is used.",
    evidence:
      "In the Ethics of Care sample, students must define ethics of care, identify care, relationships, responsibility, empathy, interdependence, and context, compare it with deontology and utilitarianism, apply it to real-life cases, and reflect on strengths and limitations.",
  },
  {
    stage: "Stage 2",
    title: "Teacher provides a system prompt",
    text: "The system prompt defines the AI tutor's role, topic, mission, interaction rules, minimum meaningful exchanges, concepts to teach, questions to ask, and final synthesis rule.",
    evidence:
      "The sample system prompt makes the AI an Educational AI Tutor in moral philosophy and deontological ethics. It must guide students through duty, moral law, universalizability, respect for persons, and Kantian reasoning rather than producing a full answer immediately.",
  },
  {
    stage: "Stage 3",
    title: "Student sets up Google AI Studio",
    text: "Students work in Google AI Studio, enter the teacher-provided system prompt, select the latest Gemini model, keep thinking low when instructed, and turn off unnecessary tools.",
    evidence:
      "The assignment sample records disabled search, browsing, code execution, image search, maps, and auto function response, with thinking level set low.",
  },
  {
    stage: "Stage 4",
    title: "Student begins the learning conversation",
    text: "The student does not ask for the assignment immediately. They explain the topic, goals, what they understand, what is confusing, and that they want an interactive process.",
    evidence:
      "The sample opening says the student wants to prepare an assignment on deontological ethics but does not want the AI to write the answer immediately.",
  },
  {
    stage: "Stage 5",
    title: "AI tutor guides, questions, and challenges",
    text: "The AI clarifies the question, checks prior knowledge, adapts to level, introduces concepts, asks for examples, probes reasoning, and delays final writing until sufficient learning has happened.",
    evidence:
      "The system prompt tells the tutor to facilitate thinking, not replace it.",
  },
  {
    stage: "Stage 6",
    title: "Minimum meaningful exchanges",
    text: "The student must complete a meaningful dialogue before requesting final synthesis. A meaningful exchange shows thinking, questioning, clarification, application, or reflection.",
    evidence:
      "The sample system prompt requires a minimum of 10 meaningful exchanges before final synthesis.",
  },
  {
    stage: "Stage 7",
    title: "Student-led inquiry",
    text: "Strong students ask follow-up questions, request examples, test understanding, compare theories, ask for critique, challenge oversimplification, and revise earlier thinking.",
    evidence:
      "The Ethics of Care instructions say a strong interaction is one where the student leads the process and asks their own questions.",
  },
  {
    stage: "Stage 8",
    title: "Learning transfer",
    text: "The transcript must show that the student learned something from AI and later used it in their own words, examples, and reasoning.",
    evidence:
      "The grading agent treats learning transfer as essential and caps marks when there is no visible later use of AI feedback.",
  },
  {
    stage: "Stage 9",
    title: "Critical evaluation of AI output",
    text: "Students do not treat AI as always correct. They ask for limitations, counterarguments, possible oversimplification, and whether AI's explanation fits course concepts.",
    evidence:
      "The instructions warn that AI praise such as excellent or strong answer is not proof of learning.",
  },
  {
    stage: "Stage 10",
    title: "Final essay generated at the end",
    text: "Only after the student meets objectives and completes the learning process may they ask AI to generate a final essay based on the conversation.",
    evidence:
      "The sample final prompt asks for a 1000-word essay from the conversation above, not a free-standing answer.",
  },
  {
    stage: "Stage 11",
    title: "Student submits the evidence",
    text: "Students submit the shared AI Studio chat link, accessible transcript, final essay, evidence of meaningful interaction, and optional reflection if required.",
    evidence:
      "The instruction file asks students to use the share option, give editor access, and rename the chat using the required format such as ETH101_Your Name_Your Enrollment Number.",
  },
];

const studioChecklist = [
  "Log in to Google AI Studio using a personal email.",
  "Paste the teacher-provided system prompt into the system instruction section.",
  "Use the latest Gemini model specified by the teacher.",
  "Keep reasoning or thinking level low when the assignment requires it.",
  "Turn off search, browsing, code execution, image search, Google Maps, and auto functions unless instructed otherwise.",
  "Check that the correct system instruction is active before starting.",
  'Begin the conversation by typing "Let\'s start."',
];

const studentSteps = [
  ["Open Google AI Studio", "Log in using your personal email and begin inside the assigned AI Studio environment."],
  ["Add the system prompt", "Copy the teacher-provided prompt into the system instruction section before chatting."],
  ["Set the model and tools", "Use the required Gemini model, keep thinking low if instructed, and switch off unnecessary tools."],
  ["Start the conversation", 'Type "Let\'s start" after the setup is complete.'],
  ["Explain learning goals", "Say what you want to understand and where you are confused. Do not ask for the final answer yet."],
  ["Participate actively", "Ask, answer, request clarification, give examples, and keep the conversation moving."],
  ["Challenge and evaluate AI", "Ask whether the explanation is too simple, incomplete, biased, or missing alternative views."],
  ["Apply what you learn", "Restate AI explanations later in your own words and apply them to examples."],
  ["Ask for the final essay at the end", "Only after meeting the objectives, ask AI to generate the essay from the conversation."],
  ["Submit the shared chat", "Share the chat with editor access and rename it according to the teacher's format."],
];

const doList = [
  "Ask your own questions.",
  "Explain your confusion.",
  "Give examples from everyday life or course contexts.",
  "Ask AI to critique your reasoning.",
  "Compare theories or concepts.",
  "Reflect on what changed in your understanding.",
  "Use concepts later in the conversation.",
];

const dontList = [
  "Do not ask AI to write the whole assignment immediately.",
  "Do not give one prompt and copy the answer.",
  "Do not only answer AI questions.",
  "Do not submit polished paragraphs without inquiry.",
  "Do not accept AI output blindly.",
  "Do not depend on AI praise.",
  "Do not submit only the final essay without the process.",
];

const promptParts = [
  ["Persona and mission", "Define the AI as an educational tutor for the specific assignment topic and concepts."],
  ["Golden rule of interaction", "Forbid immediate full essays, finished case studies, or complete assignment answers."],
  ["Minimum conversation requirement", "Require a minimum number of meaningful exchanges before final synthesis."],
  ["Prior knowledge and clarification", "Begin by checking what the student already understands and where they need help."],
  ["Guided theoretical exploration", "Introduce key concepts, ask the student to rephrase them, and connect them to course ideas."],
  ["Application to real examples", "Ask the student to apply theory to real-life cases, moral situations, or everyday technologies."],
  ["Counterarguments and reflection", "Push students to identify limits, tensions, weaknesses, and alternative views."],
  ["Structure and organization", "Help students plan the final essay only after the learning conversation has developed."],
  ["Synthesis and final review", "Generate the final essay or outline only from the student's conversation, examples, and reasoning."],
  ["Tone and boundaries", "Keep the tutor clear, supportive, intellectually curious, and process-focused."],
];

const rubricRows = [
  {
    criterion: "Understanding of AI output",
    marks: "5",
    excellent: "Accurately paraphrases AI explanations, builds on them, and applies them later.",
    good: "Mostly accurate understanding with some later use.",
    fair: "Partial understanding with weak later application.",
    poor: "Correct-sounding or disconnected responses with little evidence of uptake.",
  },
  {
    criterion: "Quality of responses to AI questions",
    marks: "7.5",
    excellent: "Thoughtful, developed, specific, and clearly connected to the ongoing dialogue.",
    good: "Relevant responses with some reasoning and development.",
    fair: "Basic or uneven answers that show limited process evidence.",
    poor: "Vague, polished, copied-looking, or answer-like responses with little thinking visible.",
  },
  {
    criterion: "Strategic questioning and prompting",
    marks: "5",
    excellent: "Purposeful student-led follow-up questions deepen learning throughout.",
    good: "Relevant follow-ups that continue the discussion.",
    fair: "Occasional basic prompting with limited strategy.",
    poor: "Few or no meaningful self-initiated questions.",
  },
  {
    criterion: "Alignment with assignment objectives",
    marks: "5",
    excellent: "Student intentionally works toward all objectives.",
    good: "Mostly aligned, with some student intention visible.",
    fair: "Partial alignment; important objectives are underdeveloped.",
    poor: "Alignment appears mainly because AI controls the lesson.",
  },
  {
    criterion: "Directing and sustaining the conversation",
    marks: "5",
    excellent: "Student clearly steers, sequences, and deepens the interaction.",
    good: "Student direction is visible but uneven.",
    fair: "Mixed control; AI often moves the process forward.",
    poor: "AI drives the conversation and the student mainly responds.",
  },
  {
    criterion: "Critical reflection and evaluation of AI output",
    marks: "7.5",
    excellent: "Student questions AI claims, asks for limits, compares alternatives, and shows independent judgment.",
    good: "Clear evaluation with some independent judgment.",
    fair: "Some reflection, but limited or late.",
    poor: "Passive acceptance or token critique only.",
  },
  {
    criterion: "Use of evidence and examples",
    marks: "5",
    excellent: "Examples are concrete, relevant, and used to reason analytically.",
    good: "Appropriate examples with some explanation.",
    fair: "Limited, generic, or underexplained examples.",
    poor: "Examples are absent, decorative, or loosely connected.",
  },
];

const sampleRubricWeights = [
  ["Understanding of AI Output", "4 marks", "Buddhist ethics sample"],
  ["Quality of Responses to AI Questions", "5 marks", "Buddhist ethics sample"],
  ["Strategic Questioning and Prompting", "4 marks", "Buddhist ethics sample"],
  ["Alignment with Assignment Objectives", "4 marks", "Buddhist ethics sample"],
  ["Directing and Sustaining the Conversation", "4 marks", "Buddhist ethics sample"],
  ["Critical Reflection and Evaluation of AI Output", "5 marks", "Buddhist ethics sample"],
  ["Use of Evidence and Examples", "4 marks", "Buddhist ethics sample"],
];

const caps = [
  ["No student-led inquiry", "If the student does not ask at least two substantive self-initiated questions, Strategic Questioning and Directing remain low."],
  ["No critical evaluation", "If the student never questions, critiques, tests, or refines AI output, Critical Reflection cannot score highly."],
  ["No learning transfer", "If AI feedback is not used later in the student's own reasoning, Understanding and Response Quality are capped."],
  ["AI-led conversation", "If AI structures every stage and the student mainly answers, the total should normally remain low."],
  ["Polished answers without inquiry", "Fluent answers alone can fall in the 4-8/40 range when there is no inquiry, critique, or development."],
  ["Implausible developmental trajectory", "If sophisticated theory appears from the beginning without buildup, the total must not exceed 24/40."],
];

const samples = [
  {
    title: "Sample system prompt",
    body:
      "The sample prompt makes Gemini an Educational AI Tutor specializing in moral philosophy and deontological ethics. It tells the AI to teach duty, moral law, universalizability, respect for persons, and Kantian reasoning, while refusing to provide a completed essay too early.",
  },
  {
    title: "Sample assignment instruction",
    body:
      "The Ethics of Care instruction file tells students that the task is not mainly about getting the right answer or producing the most polished write-up. It asks them to show purposeful AI use, meaningful questioning, critical thinking, and later application of learning.",
  },
  {
    title: "Sample student-AI conversation",
    body:
      "The assignment sample begins with the student explaining that they want to learn deontological ethics before drafting. Across the exchange, the student asks about utilitarianism, moral duty, loyalty, compassion, respect for persons, Ross, conflicting duties, and whether their reasoning is too outcome-focused.",
  },
  {
    title: "Sample final essay",
    body:
      "The final essay in the sample is generated only after the student says the objectives have been fulfilled. It draws on the cases and reasoning developed in the conversation, including cheating, hostel safety, and environmental regulation.",
  },
  {
    title: "Sample rubric",
    body:
      "The Buddhist ethics rubric uses the same process-based categories but with a 30-mark, 10 percent structure. This shows that the assessment model is adaptable across assignments and courses.",
  },
  {
    title: "Sample grading-agent instructions",
    body:
      "Agents.md instructs Codex to grade a Familiar Technology Essay by reading the transcript first, identifying who did the intellectual work, checking student agency, applying developmental plausibility, and enforcing hard caps.",
  },
];

const templateCards = [
  {
    title: "System Prompt Template",
    text:
      "You are an Educational AI Tutor specializing in [topic/module]. Do not provide a full answer immediately. Guide the student through at least [number] meaningful exchanges before final synthesis.",
  },
  {
    title: "Student Instruction Template",
    text:
      "This assignment assesses your learning process with AI. Submit the shared chat, the final essay, and evidence that you asked questions, evaluated AI, and applied learning later.",
  },
  {
    title: "AI Studio Setup Checklist",
    text:
      "Enter the system prompt, use the required Gemini model, keep thinking low if instructed, turn off unnecessary tools, and start with 'Let's start.'",
  },
  {
    title: "Student Conversation Checklist",
    text:
      "Ask follow-up questions, request clarification, give examples, challenge AI output, compare concepts, and use AI explanations later in your own reasoning.",
  },
  {
    title: "Final Essay Prompt Template",
    text:
      "I have achieved all my objectives. Now create a 1000-word essay from the conversation above, using the ideas, examples, and reasoning developed here.",
  },
  {
    title: "Submission Checklist",
    text:
      "Share the AI Studio chat, give editor access, rename it using the required course format, and submit the final essay with the transcript evidence.",
  },
  {
    title: "Rubric Template",
    text:
      "Assess understanding, response quality, strategic prompting, objective alignment, conversation direction, critical reflection, and use of evidence.",
  },
  {
    title: "Assessment Agent Template",
    text:
      "Read the full transcript. Identify student agency, learning transfer, developmental plausibility, red flags, hard caps, and criterion-by-criterion scores.",
  },
  {
    title: "Teacher Feedback Template",
    text:
      "Give the total score, criterion breakdown, objective attainment, strengths, areas for improvement, and a final evaluative comment.",
  },
  {
    title: "Student Reflection Template",
    text:
      "Explain what you learned from AI, where you challenged it, how your understanding changed, and how the final essay emerged from the conversation.",
  },
];

const faqs = [
  ["Is this encouraging students to cheat?", "No. Students must show the full learning process, including questioning, reflection, critical engagement, and learning transfer."],
  ["Why not simply ban AI?", "Banning AI does not teach responsible use. This model teaches transparent, critical, educational use of Generative AI."],
  ["Why is the transcript important?", "The transcript reveals whether the student asked questions, understood ideas, challenged AI, and developed their thinking."],
  ["Can a polished final essay earn high marks?", "Not automatically. If the transcript shows passive AI use, the score remains low."],
  ["What counts as strong AI use?", "Strong use includes meaningful questions, context, clarification, application, critique, and development over time."],
  ["What counts as weak AI use?", "Weak use includes asking for the whole answer immediately, copying output, never asking questions, never evaluating AI, and letting AI lead everything."],
  ["Why require a minimum number of exchanges?", "The rule prevents instant answer generation and makes students participate in a learning process first."],
  ["What is learning transfer?", "Learning transfer means the student learns something from AI and later uses it in their own reasoning, examples, or explanation."],
  ["Why is AI praise not enough?", "AI may say a response is excellent, but the teacher evaluates transcript evidence, not the AI's praise."],
  ["Can this model be used in different subjects?", "Yes. The provided files show ethics, Buddhist ethics, anthropology, and technology assignments using the same process-based model."],
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <a className="brand-link flex items-center gap-3 text-ink" href="#home" aria-label="Assessing AI-Supported Learning home">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink font-display text-xl text-gold">A</span>
          <span className="brand-title font-display text-lg font-semibold">AI-Supported Learning Assessment</span>
        </a>
        <nav className="nav-scroll flex gap-2 overflow-x-auto pb-1 text-sm" aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} className="nav-pill" href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, children, className = "" }) {
  return (
    <div className={`section-heading ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function IconLabel({ icon: Icon, title, children }) {
  return (
    <article className="info-card">
      <Icon className="h-6 w-6 text-moss" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function CopyButton({ text, id, copied, onCopy }) {
  return (
    <button className="template-action primary-action" type="button" onClick={() => onCopy(id, text)}>
      <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
      {copied === id ? "Copied" : "Copy Template"}
    </button>
  );
}

function App() {
  const [copied, setCopied] = useState("");

  useEffect(() => {
    if (!window.location.hash) return;
    const targetId = window.location.hash.slice(1);
    window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "auto" });
    }, 80);
  }, []);

  const handleCopy = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("");
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main id="main">
        <section id="home" className="hero-section">
          <div className="hero-overlay">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="hero-copy">
                <p className="eyebrow text-gold">From final product to learning process</p>
                <h1>
                  <span>Assessing</span>
                  <span>AI-Supported</span>
                  <span>Learning</span>
                </h1>
                <p className="hero-subtitle">
                  A process-based assessment model where students are graded on how they learn with AI, not simply on the polish of the final answer.
                </p>
                <p>
                  This website documents a practical framework for Generative AI assessment in higher education. Students work in Google AI Studio with a teacher-designed system prompt, submit the AI conversation transcript, and demonstrate student agency, questioning, critical reflection, and learning transfer.
                </p>
                <div className="flex flex-wrap gap-3 pt-3">
                  <a className="button button-primary" href="#process">
                    Explore the Process <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a className="button button-secondary" href="#student-guide">
                    View Student Workflow
                  </a>
                  <a className="button button-secondary" href="#rubric">
                    See the Rubric
                  </a>
                </div>
              </div>

              <div className="workflow-visual" aria-label="Assessment workflow visual summary">
                <div className="workflow-head">
                  <span>Structured AI assessment</span>
                  <b>Transcript first</b>
                </div>
                <div className="workflow-lanes">
                  {principles.map(([title, detail], index) => (
                    <div className="workflow-lane" key={title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <strong>{title}</strong>
                        <p>{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-ivory">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading eyebrow="Source-grounded website" title="Built from the assessment files, not a generic AI model">
              The provided documents show one coherent process adapted across different assignments. This site names those differences instead of pretending every sample is the same assignment.
            </SectionHeading>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sourceFiles.map((file) => (
                <article className="source-card" key={file.title}>
                  <FileText className="h-5 w-5 text-gold" aria-hidden="true" />
                  <h3>{file.title}</h3>
                  <p>{file.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="model" className="section">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading eyebrow="About the assessment model" title="From AI detection to process documentation">
                The central question is not simply, "Did the student write every word alone?" The stronger question is: What does the student's interaction with AI reveal about understanding, curiosity, reasoning, and intellectual development?
              </SectionHeading>
              <div className="callout">
                <Scale className="h-6 w-6 text-rust" aria-hidden="true" />
                <p>
                  A beautiful final essay cannot rescue a weak learning process. If the transcript shows little questioning, no student agency, no critical reflection, and no learning transfer, the score must remain low.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <IconLabel icon={Brain} title="AI-supported learning">
                AI is used as a learning partner for explanation, testing, comparison, and revision.
              </IconLabel>
              <IconLabel icon={GraduationCap} title="Student agency">
                Students must guide the conversation rather than merely answer what AI asks.
              </IconLabel>
              <IconLabel icon={MessageSquareText} title="Learning evidence">
                The transcript shows questions, confusion, clarification, critique, and growth.
              </IconLabel>
              <IconLabel icon={ShieldCheck} title="Transparent AI use">
                Students disclose and submit the AI process instead of hiding it.
              </IconLabel>
            </div>
          </div>
        </section>

        <section id="process" className="section bg-ivory">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading eyebrow="The full assessment process" title="A detailed timeline from assignment design to transcript grading">
              Each step is designed to stop AI from becoming an instant answer machine and to make student learning visible.
            </SectionHeading>
            <div className="timeline">
              {processStages.map((stage) => (
                <article className="timeline-item" key={stage.stage}>
                  <div className="timeline-marker">{stage.stage}</div>
                  <div>
                    <h3>{stage.title}</h3>
                    <p>{stage.text}</p>
                    <p className="evidence-note">{stage.evidence}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="studio" className="section">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading eyebrow="Google AI Studio setup" title="The technical setup is part of the assessment design">
                Students complete the assignment inside Google AI Studio using the teacher-provided system prompt. Model names and settings may change, so students must follow the latest assignment-specific instructions.
              </SectionHeading>
              <div className="studio-panel">
                <div className="studio-panel-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                  <strong>Run settings</strong>
                </div>
                <dl>
                  <div>
                    <dt>Model</dt>
                    <dd>Latest Gemini model specified by teacher</dd>
                  </div>
                  <div>
                    <dt>Thinking</dt>
                    <dd>Low, when required</dd>
                  </div>
                  <div>
                    <dt>Tools</dt>
                    <dd>Search, browse, code, images, maps, and auto functions off unless instructed</dd>
                  </div>
                  <div>
                    <dt>Start prompt</dt>
                    <dd>Let's start</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="checklist-card">
              <h3>Google AI Studio Setup Checklist</h3>
              <ul>
                {studioChecklist.map((item) => (
                  <li key={item}>
                    <CheckCircle2 className="h-5 w-5 text-moss" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="student-guide" className="section bg-ivory">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading eyebrow="Student workflow" title="How to complete this assignment">
              The student is assessed on the visible learning process: how they interact, ask, clarify, challenge, apply, and eventually synthesize.
            </SectionHeading>
            <div className="step-grid">
              {studentSteps.map(([title, text], index) => (
                <article className="step-card" key={title}>
                  <span>{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="compare-grid mt-8">
              <article className="compare-card strong">
                <h3>Do This</h3>
                <ul>{doList.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
              <article className="compare-card weak">
                <h3>Do Not Do This</h3>
                <ul>{dontList.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            </div>
          </div>
        </section>

        <section id="system-prompt" className="section">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading eyebrow="System prompt method" title="The system prompt turns AI into an educational tutor">
              The prompt is the foundation of the assessment. It instructs AI to guide, challenge, question, and support learning before any final essay is produced.
            </SectionHeading>
            <div className="prompt-grid">
              {promptParts.map(([title, text], index) => (
                <article className="prompt-part" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="template-block">
              <h3>Reusable System Prompt Template</h3>
              <pre>{`1. Persona and Mission
You are an Educational AI Tutor specializing in [topic/module]. Your mission is to guide students in understanding [key concepts]. Your role is not to simply provide answers, but to help students develop [skills].

2. The Golden Rule of Interaction
Never immediately provide a completed essay, finished case study, or full assignment answer. Guide the student through at least [number] meaningful exchanges first.

3. Learning Objectives
Help students:
- [Objective 1]
- [Objective 2]
- [Objective 3]
- [Objective 4]
- [Objective 5]

4. Interaction Process
Begin by restating the student's question, assessing prior knowledge, asking exploratory questions, introducing key concepts, asking for application, encouraging counterarguments, and supporting final organization.

5. Final Synthesis Rule
Only after enough meaningful exchanges and confirmation that objectives have been met, generate a final essay, outline, or synthesis based on the conversation.`}</pre>
            </div>
          </div>
        </section>

        <section id="conversation" className="section bg-ivory">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <SectionHeading eyebrow="Student-AI conversation process" title="What strong AI interaction looks like">
                Strong work is dialogic. The student asks, reflects, applies, evaluates, and then uses the idea later.
              </SectionHeading>
            </div>
            <div className="diagram-card lg:col-span-2">
              {["Student asks a question", "AI explains", "Student reflects", "Student asks a deeper question", "Student applies the idea", "Student evaluates the response", "Student uses the idea later"].map((item, index) => (
                <div className="diagram-step" key={item}>
                  <span>{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-8 grid max-w-7xl gap-6 px-4 lg:grid-cols-3">
            <article className="feature-panel">
              <h3>Learning Transfer: The Most Important Evidence</h3>
              <p>
                A strong transcript shows that the student asks for clarification, receives explanation, later restates the concept in their own words, applies it to a new case, and reflects on how their understanding changed.
              </p>
            </article>
            <article className="feature-panel">
              <h3>Critical Evaluation of AI</h3>
              <p>
                Students must question oversimplified explanations, ask for limitations and counterarguments, compare AI with course concepts, and identify where AI may be vague, biased, or incomplete.
              </p>
            </article>
            <article className="feature-panel">
              <h3>Final Essay Generation</h3>
              <p>
                The final essay is requested only at the end and must be based on the conversation above. It can be revised for argument, flow, clarity, academic tone, coherence, transitions, and style.
              </p>
            </article>
          </div>
          <div className="mx-auto mt-8 max-w-7xl px-4">
            <div className="final-prompt">
              <h3>Sample final prompt</h3>
              <p>
                "I have achieved all my objectives. Now create a 1000-word essay for me from the conversation above. Use clear academic language, but make sure the essay is based on the ideas, examples, and reasoning developed in this conversation."
              </p>
            </div>
          </div>
        </section>

        <section id="submission" className="section">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeading eyebrow="What students submit" title="The submission is the evidence package">
                Students do not submit only the finished essay. They submit the visible process that led to the essay.
              </SectionHeading>
              <ul className="submission-list">
                {["Shared AI Studio chat link", "Full transcript or accessible conversation", "Final essay generated from the conversation", "Evidence of meaningful interaction", "Optional reflection if required by the teacher"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="checklist-card">
              <h3>Submission Checklist</h3>
              <ul>
                {["Did I use the provided system prompt?", "Did I complete the assignment in Google AI Studio?", "Did I have a meaningful learning conversation?", "Did I ask my own questions?", "Did I challenge or evaluate AI output?", "Did I apply concepts to real-life examples?", "Did I ask for the final essay only at the end?", "Did I share the chat correctly?", "Did I give editor access?", "Did I rename the chat correctly?"].map((item) => (
                  <li key={item}>
                    <CheckCircle2 className="h-5 w-5 text-moss" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-md border border-line bg-white p-4 text-sm text-slate">
                Sample naming format: <strong>ETH101_Your Name_Your Enrollment Number</strong>
              </p>
            </div>
          </div>
        </section>

        <section id="rubric" className="section bg-ivory">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading eyebrow="Rubric and grading criteria" title="The rubric grades the learning process, not AI polish">
              The 40-mark grading-agent rubric and the 30-mark Buddhist ethics sample share the same central criteria. Exact marks may vary by assignment.
            </SectionHeading>
            <div className="rubric-table-wrap">
              <table className="rubric-table">
                <thead>
                  <tr>
                    <th>Criterion</th>
                    <th>Marks</th>
                    <th>Excellent</th>
                    <th>Good</th>
                    <th>Fair</th>
                    <th>Poor</th>
                  </tr>
                </thead>
                <tbody>
                  {rubricRows.map((row) => (
                    <tr key={row.criterion}>
                      <th>{row.criterion}</th>
                      <td>{row.marks}</td>
                      <td>{row.excellent}</td>
                      <td>{row.good}</td>
                      <td>{row.fair}</td>
                      <td>{row.poor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="info-card">
                <Layers3 className="h-6 w-6 text-moss" aria-hidden="true" />
                <h3>40-mark grading-agent structure</h3>
                <p>Understanding 5, response quality 7.5, strategic prompting 5, objective alignment 5, directing conversation 5, critical reflection 7.5, examples 5.</p>
              </article>
              <article className="info-card">
                <BookOpen className="h-6 w-6 text-moss" aria-hidden="true" />
                <h3>30-mark sample rubric</h3>
                <p>The Buddhist ethics sample uses the same seven criteria with 4, 5, 4, 4, 4, 5, and 4 marks, for a 10 percent assessment.</p>
              </article>
            </div>
            <div className="weight-list">
              {sampleRubricWeights.map(([criterion, marks, source]) => (
                <div key={criterion}>
                  <span>{criterion}</span>
                  <strong>{marks}</strong>
                  <small>{source}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="grading" className="section">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading eyebrow="Assessment agent and grading logic" title="How the transcript is graded">
              The Codex grading agent is instructed to read the full transcript, identify who is doing the intellectual work, check developmental plausibility, apply hard caps, and score each criterion separately.
            </SectionHeading>
            <div className="grid gap-6 lg:grid-cols-3">
              <article className="feature-panel">
                <h3>Central Test: Student Agency</h3>
                <p>
                  High marks require the student to lead the learning process by setting goals, giving context, asking purposeful questions, probing AI output, and applying learning later.
                </p>
              </article>
              <article className="feature-panel">
                <h3>Developmental Plausibility</h3>
                <p>
                  The transcript should show a believable journey from partial understanding to stronger understanding. If advanced concepts appear fully formed at the beginning, the transcript is treated cautiously.
                </p>
              </article>
              <article className="feature-panel">
                <h3>AI Praise Is Not Evidence</h3>
                <p>
                  Phrases like excellent answer or strong analysis from AI do not prove learning. The teacher evaluates student behavior in the transcript.
                </p>
              </article>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="red-flag-card">
                <h3>Red Flags in Student AI Use</h3>
                <ul>
                  {["AI controls the whole conversation.", "Student only answers AI questions.", "Student asks no meaningful questions.", "Student does not challenge AI output.", "Polished paragraphs appear from the start.", "Advanced concepts appear before AI explains them.", "No confusion, revision, or growth is visible.", "The final essay is stronger than the transcript.", "Student relies on AI praise.", "The conversation reads like prewritten academic prose."].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="cap-card">
                <h3>Hard Scoring Caps</h3>
                <div className="space-y-3">
                  {caps.map(([title, text]) => (
                    <div key={title}>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="agent-output mt-8">
              <h3>Required grading-agent output</h3>
              <ol>
                <li>Total score and equivalent weightage.</li>
                <li>Criterion-by-criterion breakdown with score, evidence, justification, and learning transfer note.</li>
                <li>Objective attainment summary.</li>
                <li>Strengths grounded in transcript evidence.</li>
                <li>Areas for improvement.</li>
                <li>Final evaluative comment.</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="samples" className="section bg-ivory">
          <div className="mx-auto max-w-5xl px-4">
            <SectionHeading eyebrow="Examples and samples" title="How the provided files fit the model">
              These are not generic examples. They are sample materials from a process-based AI assessment model where the conversation itself is the evidence of learning.
            </SectionHeading>
            <div className="accordion-list">
              {samples.map((sample) => (
                <details key={sample.title} className="sample-accordion">
                  <summary>{sample.title}</summary>
                  <p>{sample.body}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="templates" className="section">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading eyebrow="Templates and downloads" title="Reusable resources for this assessment model">
              These templates are copyable now. DOCX and PDF buttons are placeholders for future uploaded files.
            </SectionHeading>
            <div className="template-grid">
              {templateCards.map((template) => (
                <article className="template-card" key={template.title}>
                  <h3>{template.title}</h3>
                  <p>{template.text}</p>
                  <div className="template-actions">
                    <CopyButton text={template.text} id={template.title} copied={copied} onCopy={handleCopy} />
                    <button className="template-action" type="button" aria-disabled="true" title="Placeholder for future file">
                      <Download className="h-4 w-4" aria-hidden="true" />
                      Download DOCX
                    </button>
                    <button className="template-action" type="button" aria-disabled="true" title="Placeholder for future file">
                      View Example
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section bg-ivory">
          <div className="mx-auto max-w-5xl px-4">
            <SectionHeading eyebrow="FAQ" title="Common questions about process-based AI assessment">
              The model does not romanticize AI or treat students as cheaters. It documents responsible, transparent, assessable AI use.
            </SectionHeading>
            <div className="accordion-list">
              {faqs.map(([question, answer]) => (
                <details key={question} className="faq-accordion">
                  <summary>
                    <HelpCircle className="h-5 w-5 text-moss" aria-hidden="true" />
                    {question}
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="eyebrow text-gold">Contact / About Me</p>
              <h2>About this teaching innovation project</h2>
              <p>
                This website documents Tiatemsu Longkumer's approach to assessing Generative AI use in higher education. The model can be adapted across moral philosophy, Buddhist ethics, anthropology, technology and society, and other courses where the instructor wants evidence of learning rather than hidden AI use.
              </p>
            </div>
            <div className="contact-card">
              <Mail className="h-7 w-7 text-gold" aria-hidden="true" />
              <h3>Central message</h3>
              <p>
                This is not an assessment of whether AI can write a good essay. It is an assessment of whether the student can use AI to learn, question, reflect, apply, and develop understanding.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-ink/20 bg-ink px-4 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between">
          <p className="font-display text-lg">Assessing AI-Supported Learning</p>
          <p className="text-white/70">Process-based framework for Generative AI in higher education.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
