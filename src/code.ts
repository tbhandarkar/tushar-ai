type SelectionItem = {
  id: string;
  name: string;
  type: string;
};

type UiMessage =
  | { type: "create-note"; text: string }
  | { type: "notify"; message: string }
  | { type: "close" };

const noteWidth = 320;
const noteHeight = 180;
const interRegular: FontName = { family: "Inter", style: "Regular" };

figma.showUI(__html__, {
  width: 360,
  height: 420,
  themeColors: true
});

function postSelectionSummary() {
  const items: SelectionItem[] = figma.currentPage.selection.map((node) => ({
    id: node.id,
    name: node.name,
    type: node.type
  }));

  figma.ui.postMessage({
    type: "selection-summary",
    items
  });
}

async function createNote(text: string) {
  await figma.loadFontAsync(interRegular);

  const frame = figma.createFrame();
  frame.name = "Tushar AI note";
  frame.resizeWithoutConstraints(noteWidth, noteHeight);
  frame.x = figma.viewport.center.x - noteWidth / 2;
  frame.y = figma.viewport.center.y - noteHeight / 2;
  frame.cornerRadius = 18;
  frame.fills = [
    {
      type: "SOLID",
      color: { r: 0.09, g: 0.09, b: 0.11 }
    }
  ];
  frame.layoutMode = "VERTICAL";
  frame.primaryAxisSizingMode = "FIXED";
  frame.counterAxisSizingMode = "FIXED";
  frame.itemSpacing = 12;
  frame.paddingTop = 24;
  frame.paddingRight = 24;
  frame.paddingBottom = 24;
  frame.paddingLeft = 24;

  const title = figma.createText();
  title.name = "Title";
  title.fontName = interRegular;
  title.characters = "Tushar AI";
  title.fontSize = 20;
  title.fills = [
    {
      type: "SOLID",
      color: { r: 1, g: 1, b: 1 }
    }
  ];

  const body = figma.createText();
  body.name = "Prompt";
  body.fontName = interRegular;
  body.characters = text.trim() || "Use this starter plugin to connect a Figma workflow to Tushar AI.";
  body.fontSize = 14;
  body.lineHeight = { unit: "PERCENT", value: 140 };
  body.resizeWithoutConstraints(noteWidth - 48, 1);
  body.textAutoResize = "HEIGHT";
  body.fills = [
    {
      type: "SOLID",
      color: { r: 0.82, g: 0.85, b: 0.91 }
    }
  ];

  frame.appendChild(title);
  frame.appendChild(body);
  figma.currentPage.selection = [frame];
  figma.viewport.scrollAndZoomIntoView([frame]);
  figma.notify("Created a Tushar AI note");
  postSelectionSummary();
}

figma.on("selectionchange", postSelectionSummary);
postSelectionSummary();

figma.ui.onmessage = async (message: UiMessage) => {
  if (message.type === "create-note") {
    await createNote(message.text);
    return;
  }

  if (message.type === "notify") {
    figma.notify(message.message);
    return;
  }

  if (message.type === "close") {
    figma.closePlugin();
  }
};
