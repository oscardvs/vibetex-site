import { ImageResponse } from 'next/og';
import { generate as DefaultImage } from 'fumadocs-ui/og';
import { appName } from '@/lib/shared';

export const dynamic = 'force-static';
export const revalidate = false;

export function GET() {
  return new ImageResponse(
    (
      <DefaultImage
        title="Overleaf and LaTeX, inside every AI conversation"
        description="The everything Overleaf MCP server — Git bridge, project sync, and LaTeX compile for Claude and any MCP client."
        site={appName}
      />
    ),
    { width: 1200, height: 630 },
  );
}
