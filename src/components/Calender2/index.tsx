"use client";
import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  HStack,
  Box,
  Heading,
  Select,
  VStack,
} from "@chakra-ui/react";

const InventoryPage = () => {
  interface Item {
    itemId: number;
    name: string;
    famille: string;
    sousfamille: string;
    quantity: number;
    description: string;
    image: string;
  }

  const mockItems: Item[] = [
    {
      itemId: 2,
      name: "Chaise de Bureau",
      famille: "Mobilier",
      sousfamille: "Chaises",
      quantity: 30,
      description: "Chaise de bureau ergonomique avec soutien lombaire.",
      image: "office-chair.jpg",
    },
    {
      itemId: 4,
      name: "Cahier",
      famille: "Papeterie",
      sousfamille: "Cahiers",
      quantity: 200,
      description: "Un ensemble de 5 cahiers à lignes.",
      image: "notebook.jpg",
    },
    {
      itemId: 5,
      name: "Lampe de Bureau",
      famille: "Mobilier",
      sousfamille: "Tables",
      quantity: 60,
      description: "Lampe de bureau LED avec luminosité réglable.",
      image: "desk-lamp.jpg",
    },
    {
      itemId: 9,
      name: "Armoire de Rangement",
      famille: "Mobilier",
      sousfamille: "Tables",
      quantity: 25,
      description: "Armoire de rangement en métal avec serrure.",
      image: "storage-cabinet.jpg",
    },
    {
      itemId: 10,
      name: "Stylo à Bille",
      famille: "Papeterie",
      sousfamille: "Stylos",
      quantity: 500,
      description: "Un ensemble de 10 stylos à bille noirs.",
      image: "pen.jpg",
    },
    {
      itemId: 11,
      name: "Table de Réunion",
      famille: "Mobilier",
      sousfamille: "Tables",
      quantity: 10,
      description: "Table de réunion en bois pour 8 personnes.",
      image: "conference-table.jpg",
    },
  ];

  const [items, setItems] = useState<Item[]>(mockItems);

  const families = ["Mobilier", "Papeterie"];
  const subFamilies = ["Chaises", "Tables", "Stylos", "Cahiers"];

  const [selectedSubFamily, setSelectedSubFamily] = useState<string | undefined>(undefined);
  const [selectedFamily, setSelectedFamily] = useState<string | undefined>(undefined);

  const handleFilter = () => {
    let filteredItems = mockItems;

    if (selectedFamily) {
      filteredItems = filteredItems.filter(item => item.famille === selectedFamily);
    }

    if (selectedSubFamily) {
      filteredItems = filteredItems.filter(item => item.sousfamille === selectedSubFamily);
    }

    setItems(filteredItems);
  };

  return (
    <div className="mx-auto max-w-7xl" style={{ position: 'relative' }}>
      <HStack spacing={4} align="stretch" mb={4}>
        <VStack align="start">
          <Heading size="small">Famille:</Heading>
          <Select placeholder="" onChange={(e) => setSelectedFamily(e.target.value)} size="sm" width="200px">
            {families.map((family, index) => (
              <option key={index} value={family}>
                {family}
              </option>
            ))}
          </Select>
        </VStack>
        <VStack align="start">
          <Heading size="small">Sous-Famille:</Heading>
          <Select placeholder="" onChange={(e) => setSelectedSubFamily(e.target.value)} size="sm" width="200px">
            {subFamilies.map((subFamily, index) => (
              <option key={index} value={subFamily}>
                {subFamily}
              </option>
            ))}
          </Select>
        </VStack>
        <Box >
          <Button onClick={handleFilter} size="sm" top="30px">
            Rechercher
          </Button>
        </Box>
      </HStack>

      <TableContainer>
        <Table variant="simple">
          <TableCaption>Inventaire des Moyens Generaux</TableCaption>
          <Thead>
            <Tr>
              <Th>Nom</Th>
              <Th>Description</Th>
              <Th>Quantité Totale</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item) => (
              <Tr key={item.itemId}>
                <Td>{item.name}</Td>
                <Td>{item.description}</Td>
                <Td>{item.quantity}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InventoryPage;
