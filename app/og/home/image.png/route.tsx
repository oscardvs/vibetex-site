import { ImageResponse } from 'next/og';
import { generate as DefaultImage } from 'fumadocs-ui/og';
import { appName } from '@/lib/shared';

export const dynamic = 'force-static';
export const revalidate = false;

export function GET() {
  return new ImageResponse(
    (
      <DefaultImage
        title="Overleaf and LaTeX for Claude and other MCP clients"
        description="An MCP server for LaTeX and Overleaf projects: Git bridge, project sync, and LaTeX compile for Claude and other MCP clients."
        site={appName}
      />
    ),
    { width: 1200, height: 630 },
  );
}
