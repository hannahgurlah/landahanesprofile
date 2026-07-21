import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
    title: "School Issued Memorandums | Ibo Elementary School",
    description:
        "Official listing of school issued memorandums from Ibo Elementary School.",
};

type Memorandum = {
    number: string;
    title: string;
    date: string;
    category: string;
    href?: string;
};

const memorandums: Memorandum[] = [
    {
        number: "SIM No. , s. 2026",
        title: "DESIGNATION ORDER FOR THE COMPOSITION OF Grievance Committee for School Year 2026 - 2027",
        date: "June 22, 2026",
        category: "Designation Order",
        href: "https://drive.google.com/file/d/1S8KOxycr4SRqho1J7Kq7Ww8_u0OSxJJd/view?usp=drive_link",
    },
    {
        number: "SIM No. , s. 2026",
        title: "Designation Order for ICT Coordinators forSchool Year 2026 - 2027",
        date: "June 2, 2026",
        category: "Designation Order",
        href: "https://drive.google.com/file/d/1zsht4_yrp2id7ZMAPtjkFj75VYDJ8yRL/view?usp=drive_link",
    },
    {
        number: "SIM No. , s. 2026",
        title: "DESIGNATION ORDER FOR THE COMPOSITION OF THE BIDS AND AWARDS COMMITTEE (BAC), SCHOOL INSPECTORATE TEAM (SIT), AND SCHOOL PROPERTY CUSTODIAN",
        date: "February 11, 2026",
        category: "Designation Order",
        href: "https://drive.google.com/file/d/17g77Lqtkv3TetsAfoCWGoIzDhLmWm7T4/view?usp=drive_link",
    },
    {
        number: "SIM No. , s. 2026",
        title: "DESIGNATION OF SCHOOL GRIEVANCE COMMITTEE COMPOSITION ",
        date: "January 22, 2026",
        category: "School Events",
        href: "https://drive.google.com/file/d/1oyfyLvHl5u5hzPYss7ofbFCIJSskGkk2/view?usp=drive_link",
    },
    {
        number: "SIM No. , s. 2026",
        title: "DESIGNATION OF SCHOOL DRRM COORDINATOR, ALTERNATE, AND UPDATED  SCHOOL DRRM TEAM COMPOSITION ",
        date: "April 20, 2026",
        category: "School Coordinatorship",
        href: "https://drive.google.com/file/d/1PqYyuSHQNHRLNKLz0892lZgA_YdV46nk/view?usp=drive_link",
    },
    {
        number: "SIM No. , s. 2026",
        title: "TRANSMITTAL  OF  THE  FY  2025  CLIENT  SATISFACTION MEASUREMENT (CSM) RESULTS",
        date: "January 30, 2026",
        category: "Client Satisfaction",
        href: "https://drive.google.com/file/d/1mJANQNFL0Tr3ClpxA9PAdu8D8_QVC4Pu/view?usp=drive_link",
    },
    {
        number: "SIM No. , s. 2026",
        title: "MID-YEAR PERFORMANCE REVIEW FOR SCHOOL YEAR 2025-2026",
        date: "January 23, 2026",
        category: "Performance Review",
        href: "https://drive.google.com/file/d/1uKm2uWym5C4H1pgbVwL5HZfA5rr0l5Sr/view?usp=drive_link",
    },
    {
        number: "SIM No. , s. 2026",
        title: "Fourth Quarter Learning Action Cell Session for School Year 2025 - 2026",
        date: "January 9, 2026",
        category: "Learning Action Cell",
        href: "https://drive.google.com/file/d/1aZIv_rwXhiLtWB5xK_iEFNX-Vk84qM-T/view?usp=drive_link",
    },
    {
        number: "SIM No. , s. 2025",
        title: "Performance Review and Christmas Party for School Year 2025 - 2026",
        date: "December 12, 2025",
        category: "Performance Evaluation",
        href: "https://drive.google.com/file/d/1_EFrFfs9egOEGtdxtvWdJacNvG2FZ19w/view?usp=drive_link",
    },
    {
        number: "SIM No. , s. 2025",
        title: "Third Quarter Learning Action Cell Session for School Year 2025 - 2026",
        date: "December 3, 2025",
        category: "Learning Action Cell",
        href: "https://drive.google.com/file/d/1XybqMYHiYXMzN6PJE-prC4b5HjKrCgEt/view?usp=drive_link",
    },
    {
        number: "SIM No. , s. 2026",
        title: "Designation In-Charge",
        date: "November 24, 2025",
        category: "Assessment",
        href: "https://drive.google.com/file/d/1S8lpWL3ZmGEHfuMZalt4T1mk5u3tN1yC/view?usp=drive_link",
    },
    {
        number: "SIM No. , s. 2026",
        title: "Teachers' Meeting / Conference",
        date: "November 3, 2025",
        category: "Teachers' Meeting",
        href: "https://drive.google.com/file/d/1EDkBqQrvzQEvt4Ubp2kTPoMXkw02KrRl/view?usp=drive_link",
    },
    {
        number: "SIM No. , s. 2026",
        title: "Teachers’ Meeting/Conference, District Athletic Meet, Updates on School-Based Feeding Program",
        date: "October 6, 2025",
        category: "Teachers' Meeting",
        href: "https://drive.google.com/file/d/1u-H-PJfXWoqRsgMQqCWjNP47iOBU3gSZ/view?usp=drive_link",
    },
    {
        number: "SIM No. , s. 2026",
        title: "First Quarter Periodical Examination",
        date: "August 16, 2025",
        category: "Examination",
        href: "https://drive.google.com/file/d/1k5pcqa2KKcOHZWDS0RJO2o5ZZst7Dgdd/view?usp=drive_link",
    },
  
   

    
    
];

function getMemorandumTimestamp(date: string) {
    const timestamp = Date.parse(date);
    return Number.isNaN(timestamp) ? 0 : timestamp;
}

function sortMemorandumsByDate(items: Memorandum[]) {
    return [...items].sort((a, b) => {
        const dateDifference = getMemorandumTimestamp(b.date) - getMemorandumTimestamp(a.date);

        if (dateDifference !== 0) {
            return dateDifference;
        }

        return a.title.localeCompare(b.title);
    });
}

const sortedMemorandums = sortMemorandumsByDate(memorandums);

function getMemorandumKey(memo: Memorandum, index: number) {
    const base = memo.href ?? `${memo.number}-${memo.title}-${memo.date}`;
    return `${base}-${index}`;
}

function categorySlug(category: string) {
    return category
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

function MemorandumFileLink({ href }: { href?: string }) {
    if (href) {
        return (
            <Link
                className="memorandum-link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="memorandum-link-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M9 1.5H3.5A1.5 1.5 0 0 0 2 3v9.5A1.5 1.5 0 0 0 3.5 14h9A1.5 1.5 0 0 0 14 12.5V7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M11 1.5h3.5V5M14 1.5 8 7.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                View PDF
            </Link>
        );
    }

    return <span className="memorandum-unavailable">Pending</span>;
}

export default function SchoolIssuedMemorandumsPage() {
    const availableCount = sortedMemorandums.filter((memo) => memo.href).length;
    const categoryCount = new Set(sortedMemorandums.map((memo) => memo.category)).size;

    return (
        <SiteShell
            eyebrow="Official School Communications"
            title="School Issued Memorandums"
            description="This page provides a centralized listing of official school issued memorandums for learners, parents, teachers, and stakeholders."
        >
            <section className="memorandum-listing section-space">
               

                <div className="section-heading memorandum-heading">
                    <p className="eyebrow">Official Records</p>
                    <h2>Browse and download school issued memorandums.</h2>
                    <p className="memorandum-lead">
                        Memorandums are listed from newest to oldest. Select a document to open
                        the official PDF in a new tab.
                    </p>
                </div>

                {sortedMemorandums.length > 0 ? (
                    <>
                        <div className="memorandum-table-wrap" aria-label="Memorandum listing table">
                            <table className="memorandum-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Memo No.</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Date Issued</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">File</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedMemorandums.map((memo, index) => (
                                        <tr key={getMemorandumKey(memo, index)}>
                                            <td data-label="Memo No.">
                                                <span className="memorandum-number">{memo.number}</span>
                                            </td>
                                            <td data-label="Title">
                                                <span className="memorandum-title">{memo.title}</span>
                                            </td>
                                            <td data-label="Date Issued">
                                                <time className="memorandum-date" dateTime={memo.date}>
                                                    {memo.date}
                                                </time>
                                            </td>
                                            <td data-label="Category">
                                                <span
                                                    className={`memorandum-category memorandum-category--${categorySlug(memo.category)}`}
                                                >
                                                    {memo.category}
                                                </span>
                                            </td>
                                            <td data-label="File">
                                                <MemorandumFileLink href={memo.href} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="memorandum-cards" aria-label="Memorandum listing cards">
                            {sortedMemorandums.map((memo, index) => (
                                <article
                                    key={`card-${getMemorandumKey(memo, index)}`}
                                    className="memorandum-card"
                                >
                                    <div className="memorandum-card-top">
                                        <span
                                            className={`memorandum-category memorandum-category--${categorySlug(memo.category)}`}
                                        >
                                            {memo.category}
                                        </span>
                                        <time className="memorandum-date" dateTime={memo.date}>
                                            {memo.date}
                                        </time>
                                    </div>
                                    <h3 className="memorandum-card-title">{memo.title}</h3>
                                    <div className="memorandum-card-footer">
                                        <span className="memorandum-number">{memo.number}</span>
                                        <MemorandumFileLink href={memo.href} />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </>
                ) : (
                    <article className="panel memorandum-empty">
                        <p className="eyebrow">No Memorandums Posted Yet</p>
                        <h3>Memorandum files will be listed here once they are uploaded.</h3>
                        <p>
                            Add future memorandum PDFs or documents to the public assets folder, then add
                            their details to this page so stakeholders can view them in one place.
                        </p>
                    </article>
                )}
            </section>
        </SiteShell>
    );
}
