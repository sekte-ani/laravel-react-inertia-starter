import { Head, Link } from '@inertiajs/react';
// import {Button} from '@ani-ui/anis';
import { Button, Input } from '@ani-ui/anis';

export default function Home() {
    return (
        <>
            <Head title="Home" />

            <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 p-8 text-slate-900">
                <div className="mx-auto max-w-3xl">
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                        <div className="flex items-start justify-between gap-6">
                            <div>
                                <h1 className="text-2xl font-semibold tracking-tight">
                                    Home (React + Inertia)
                                </h1>
                                <p className="mt-2 text-sm text-slate-600">
                                    Kalau halaman ini tampil, berarti route kamu sudah
                                    render komponen React via Inertia.
                                </p>
                            </div>
                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
                                OK
                            </span>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="text-xs font-medium text-slate-500">
                                    Route
                                </div>
                                <div className="mt-1 font-mono text-sm">/</div>
                            </div>
                            <div className="rounded-xl border border-slate-200 p-4">
                                <div className="text-xs font-medium text-slate-500">
                                    Page component
                                </div>
                                <div className="mt-1 font-mono text-sm">
                                    resources/js/pages/Home.tsx
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
                            >
                                Refresh Home
                            </Link>
                            <Link
                                href="/welcome"
                                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
                            >
                                Go to /welcome
                            </Link>
                            <Button color='primary'>Tombol</Button>
                            <Input placeholder="Masukkan teks..." />
                        </div>


                        <p className="mt-6 text-xs text-slate-500">
                            Next: bikin page kamu sendiri di folder{' '}
                            <span className="font-mono">resources/js/pages</span>{' '}
                            lalu ganti route di{' '}
                            <span className="font-mono">routes/web.php</span>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
