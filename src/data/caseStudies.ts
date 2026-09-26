import {
  CalendarCheck,
  Receipt,
  FileCheck2,
  BookOpen,
  Bot,
  Workflow,
} from 'lucide-react'
import type { CaseStudy } from '@/types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'room-booking',
    title: 'Room Booking System',
    category: 'Power Apps + Power Automate',
    status: 'Concept Project',
    summary:
      'A canvas app for reserving meeting rooms with automated conflict checks and calendar sync.',
    problem: 'Teams were double-booking shared meeting rooms using scattered spreadsheets and emails.',
    solution:
      'A Power Apps canvas app backed by Dataverse, with Power Automate handling conflict detection, confirmations, and Outlook calendar sync.',
    outcome:
      'A single, self-service booking experience that prevents double-bookings and keeps room usage visible to facilities teams.',
    technologies: ['Power Apps', 'Power Automate', 'Dataverse', 'Outlook'],
    icon: CalendarCheck,
  },
  {
    slug: 'expense-management',
    title: 'Expense Management',
    category: 'Power Apps + Power Automate',
    status: 'Concept Project',
    summary: 'Digital expense submission with multi-level approvals and automated notifications.',
    problem: 'Manual, paper-based expense submission led to slow approvals and lost receipts.',
    solution:
      'A mobile-friendly Power Apps form for submitting expenses with receipt capture, routed through a Power Automate approval flow based on amount and department.',
    outcome:
      'A structured digital process that replaces paper trails with clear, trackable approval steps.',
    technologies: ['Power Apps', 'Power Automate', 'SharePoint', 'AI Builder'],
    icon: Receipt,
  },
  {
    slug: 'document-approval',
    title: 'Document Approval Workflow',
    category: 'SharePoint + Power Automate',
    status: 'Concept Project',
    summary: 'Structured review and sign-off process for business documents stored in SharePoint.',
    problem:
      'Document approvals happened over email threads with no visibility into status or version history.',
    solution:
      'A SharePoint document library with metadata-driven routing and a Power Automate flow that manages sequential approvals, reminders, and status tracking.',
    outcome:
      'Every document has a clear, auditable approval trail with automatic reminders for pending reviewers.',
    technologies: ['SharePoint', 'Power Automate', 'Power Apps'],
    icon: FileCheck2,
  },
  {
    slug: 'sharepoint-knowledge-portal',
    title: 'SharePoint Knowledge Portal',
    category: 'SharePoint',
    status: 'Concept Project',
    summary: 'A searchable internal knowledge hub for policies, guides, and team resources.',
    problem: 'Company knowledge was scattered across drives, chats, and inboxes, making it hard to find.',
    solution:
      'A modern SharePoint intranet with metadata-based navigation, curated landing pages, and integrated search across content types.',
    outcome:
      'A centralized home for organizational knowledge that is easier to navigate and maintain over time.',
    technologies: ['SharePoint', 'Microsoft 365', 'Power Automate'],
    icon: BookOpen,
  },
  {
    slug: 'ai-business-assistant',
    title: 'AI Business Assistant',
    category: 'Copilot Studio',
    status: 'Concept Project',
    summary: 'A conversational agent that answers policy questions and triggers common requests.',
    problem: 'Employees repeatedly asked HR and IT the same policy and process questions.',
    solution:
      'A Copilot Studio agent grounded on SharePoint policy documents, deployed in Microsoft Teams, with Power Automate handling common request actions.',
    outcome:
      'A conversational front door for routine questions that can also kick off request workflows directly from chat.',
    technologies: ['Copilot Studio', 'SharePoint', 'Power Automate', 'Microsoft Teams'],
    icon: Bot,
  },
  {
    slug: 'workflow-automation',
    title: 'Cross-System Workflow Automation',
    category: 'Power Automate + APIs',
    status: 'Concept Project',
    summary: 'Automated data sync connecting Power Platform to external business systems.',
    problem: 'Data had to be manually re-entered across multiple disconnected business systems.',
    solution:
      'Power Automate flows and custom connectors that synchronize records between Dataverse and external APIs, with error handling and monitoring built in.',
    outcome: 'Reduced manual re-entry and kept data consistent across connected systems.',
    technologies: ['Power Automate', 'Dataverse', 'Azure Functions', 'REST APIs'],
    icon: Workflow,
  },
]
