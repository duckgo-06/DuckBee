import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "@/styles/globals.css"

const RootLayout = ({ children }: React.PropsWithChildren) => (
    <html lang="en">
        <body>
        <div className="layout">
            <AntdRegistry>{children}</AntdRegistry>
        </div>
        </body>
    </html>
);

export default RootLayout;