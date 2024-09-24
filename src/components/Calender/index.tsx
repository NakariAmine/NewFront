"use client";
import { useState } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Select,
  VStack,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons"; // Import the DeleteIcon
import { IconButton } from "@chakra-ui/react"; // Import the IconButton

const Calendar = () => {
  interface Item {
    itemId: number;
    name: string;
    category: string;
    quantity: number;
    description: string;
    image: string;
    selectedQuantity?: number;
    totalSelectedQuantity?: number;
  }

  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook to manage drawer state

  const mockItems: Item[] = [
    {
      itemId: 1,
      name: "Laptop",
      category: "Electronics",
      quantity: 50,
      description: "A high-performance laptop suitable for all your computing needs.",
      image: "laptop.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 2,
      name: "Office Chair",
      category: "Furniture",
      quantity: 30,
      description: "Ergonomic office chair with lumbar support.",
      image: "office-chair.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 3,
      name: "Wireless Mouse",
      category: "Electronics",
      quantity: 100,
      description: "A smooth and responsive wireless mouse.",
      image: "wireless-mouse.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 4,
      name: "Notebook",
      category: "Stationery",
      quantity: 200,
      description: "A set of 5 ruled notebooks.",
      image: "notebook.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    },
    {
      itemId: 5,
      name: "Desk Lamp",
      category: "Furniture",
      quantity: 60,
      description: "LED desk lamp with adjustable brightness.",
      image: "desk-lamp.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0},
    {
      itemId: 6,
      name: "Projector",
      category: "Electronics",
      quantity: 20,
      description: "HD projector for presentations and movies.",
      image: "projector.jpg",
      selectedQuantity: 0,
      totalSelectedQuantity: 0,
    }
  ];

  const [items, setItems] = useState<Item[]>(mockItems);

  const incrementQuantity = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.itemId === itemId && item.selectedQuantity! < item.quantity) {
          const updatedItem = { ...item, selectedQuantity: (item.selectedQuantity || 0) + 1 };
          console.log(`Incremented: ${updatedItem.name}, Selected Quantity: ${updatedItem.selectedQuantity}`);
          return updatedItem;
        }
        return item;
      })
    );
  };

  const setTotalQuantityToZero = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.itemId === itemId
          ? { ...item, totalSelectedQuantity: 0 }
          : item
      )
    );
  };
  
  const decrementQuantity = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.itemId === itemId && (item.selectedQuantity || 0) > 0) {
          const updatedItem = { ...item, selectedQuantity: (item.selectedQuantity || 0) - 1 };
          console.log(`Decremented: ${updatedItem.name}, Selected Quantity: ${updatedItem.selectedQuantity}`);
          return updatedItem;
        }
        return item;
      })
    );
  };

  const decrementTotalQuantity = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.itemId === itemId && (item.totalSelectedQuantity || 0) > 0) {
          const updatedItem = { ...item, totalSelectedQuantity: (item.totalSelectedQuantity || 0) - 1 };
          console.log(`Decremented: ${updatedItem.name}, Total Selected Quantity: ${updatedItem.totalSelectedQuantity}`);
          return updatedItem;
        }
        return item;
      })
    );
  }

  const incrementTotalQuantity = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.itemId === itemId && item.totalSelectedQuantity! < item.quantity) {
          const updatedItem = { ...item, totalSelectedQuantity: (item.totalSelectedQuantity || 0) + 1 };
          console.log(`Incremented: ${updatedItem.name}, Total Selected Quantity: ${updatedItem.totalSelectedQuantity}`);
          return updatedItem;
        }
        return item;
      })
    );
  }

  const addToCart = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.itemId === itemId) {
          const updatedItem = { ...item, totalSelectedQuantity: (item.totalSelectedQuantity || 0) + (item.selectedQuantity || 0) };
          console.log(`Added to cart: ${updatedItem.name}, Total Selected Quantity: ${updatedItem.totalSelectedQuantity}`);
          return updatedItem;
        }
        return item;
      })
    );
  } 

  const selectedItems = items.filter(item => item.selectedQuantity! > 0);

const categories = ["Moyens Generaux", "Informatique"];
const families = ["Family 1", "Family 2", "Family 3"];
const subFamilies = ["Sub-family 1", "Sub-family 2", "Sub-family 3"];

const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
const [selectedFamily, setSelectedFamily] = useState<string | undefined>(undefined);
const [selectedSubFamily, setSelectedSubFamily] = useState<string | undefined>(undefined);

return (
  <div className="mx-auto max-w-7xl" style={{ position: 'relative' }}>
    <Breadcrumb pageName="Creer une nouvelle demande" />

    <HStack spacing={4} align="stretch" mb={4}>
      <VStack align="start">
        <Heading size="small">Categorie:</Heading>
        <Select placeholder="" onChange={(e) => setSelectedCategory(e.target.value)} size="sm" width="200px">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </VStack>
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
        <Button onClick={onOpen} size="sm" top="30px">
          Rechercher
        </Button>
      </Box>
    </HStack>

    <Box position="absolute" top="10px" right="10px">
      <Button onClick={onOpen} size="sm">
        Afficher les articles sélectionnés
      </Button>
    </Box>

    <TableContainer>
      <Table variant="simple">
        <TableCaption>Articles disponibles pour la demande</TableCaption>
        <Thead>
          <Tr>
            <Th>Nom</Th>
            <Th>Description</Th>
            <Th>Quantité</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item) => (
            <Tr key={item.itemId}>
              <Td>{item.name}</Td>
              <Td>{item.description}</Td>
              <Td>
                <HStack spacing={4}>
                  <Button
                    onClick={() => decrementQuantity(item.itemId)}
                    size="sm"
                  >
                    -
                  </Button>
                  <span>{item.selectedQuantity}</span>
                  <Button
                    onClick={() => incrementQuantity(item.itemId)}
                    size="sm"
                  >
                    +
                  </Button>
                </HStack>
              </Td>
              <Td>
                <Button
                  onClick={() => addToCart(item.itemId)}
                  size="sm"
                >
                  Ajouter
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>

    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="sm"
    >
      <DrawerOverlay />
      <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Articles sélectionnés</DrawerHeader>
      <DrawerBody>
        {selectedItems.filter(item => item.totalSelectedQuantity! > 0).length > 0 ? (
        <TableContainer>
          <Table variant="simple">
          <Thead>
            <Tr>
            <Th>Nom</Th>
            <Th>Quantité Totale</Th>
            </Tr>
          </Thead>
          <Tbody>
            {selectedItems.filter(item => item.totalSelectedQuantity! > 0).map((item) => (
            <Tr key={item.itemId}>
              <Td>{item.name}</Td>
              <Td>
              <HStack spacing={4} justifyContent="space-between">
                <HStack spacing={4}>
                <Button
                  onClick={() => decrementTotalQuantity(item.itemId)}
                  size="sm"
                >
                  -
                </Button>
                <span>{item.totalSelectedQuantity}</span>
                <Button
                  onClick={() => incrementTotalQuantity(item.itemId)}
                  size="sm"
                >
                  +
                </Button>
                </HStack>
                <IconButton
                aria-label="Remove item"
                icon={<DeleteIcon />}
                size="sm"
                onClick={() => setTotalQuantityToZero(item.itemId)}
                />
              </HStack>
              </Td>
            </Tr>
            ))}
          </Tbody>
          </Table>
        </TableContainer>
        ) : (
        <Box>Aucun article selectionné.</Box>
        )}
      </DrawerBody>
      <Box position="absolute" bottom="10px" right="10px">
        <Button onClick={() => console.log("Creer La Demande")}>
        Confirmer
        </Button>
      </Box>
      </DrawerContent>
    </Drawer>
  </div>
);
};

export default Calendar;
