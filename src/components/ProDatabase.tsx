"use client";
import { useEffect, useState } from "react";

interface Categorie {
  categorieId: number;
  categorieNom: string;
}

interface Item {
  itemId: number;
  id: number;
  name: string;
  category: string;
  quantity: number;
  description: string;
  image: string;
  selectedQuantity?: number;
  totalSelectedQuantity?: number;
}

interface Demand {
  valideurId?: number;
  demandId: number;
  name?: string;
  sendingTime: string | number | Date;
  dateCreated: string;
  description?: string;
  lastModified?: string;
  status: string;
  createdAt: string | number | Date;
  categorie: Categorie;
}

interface DemandItemData {
  demandItemId: number;
  quantity: number;
  item: Item;
}

interface Category {
  categorieId: number;
  categorieNom: string;
}

interface Famille {
  familleId: number;
  familleNom: string;
  categoryId: number;
}

interface SousFamille {
  sousFamilleId: number;
  sousFamilleNom: string;
  familleId: number;
}

let fetchedItems: Item[] = [];
let isFetched = false;
let isFetchedD = false;
let fetchedDemands: Demand[] = [];
let fetchedDemandItems: DemandItemData[] = [];
let fetchedCategories: Category[] = [];
let fetchedFamillies: Famille[] = [];
let fetchedSousFamillies: SousFamille[] = [];
let fetchedSousFamilleItems: Item[] = [];
let fetchedDemandsByCategorie: Demand[] = [];
let fetchDemandsForLog: Demand[] = [];

export const fetchDemands = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/demands/", {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (res.status === 403) {
      console.error(
        "Failed to fetch Demands: Unauthorized. Check your token and permissions.",
      );
      return;
    }

    if (res.status === 500) {
      console.error(
        "Failed to fetch Demands: Internal Server Error. Check server logs.",
      );
      return;
    }

    if (res.ok) {
      fetchedDemands = await res.json();
      return fetchedDemands;
    } else {
      console.error("Failed to fetch items:", res.statusText);
    }
  } catch (error) {
    console.error("An error occurred while fetching items:", error);
  }
};

export const fetchDemandsByCategorie = async (categorieId: number) => {
  try {
    const res = await fetch(
      `http://localhost:8080/api/demands/${categorieId}`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );

    if (res.status === 403) {
      console.log(
        "cannot fetch the demand by categorie due to permission reasons",
      );
      return;
    }

    if (res.status === 500) {
      console.log("internal server error");
      return;
    }
    if (res.ok) {
      fetchedDemandsByCategorie = await res.json();
      return fetchedDemandsByCategorie;
    } else {
      console.error("Failed to fetch items for the demand:", res.statusText);
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchDemandsLog = async (categorieId: number) => {
  try {
    const res = await fetch(
      `http://localhost:8080/api/demands/cats/${categorieId}/`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );

    if (res.status === 403) {
      console.log(
        "cannot fetch the demand by categorie due to permission reasons",
      );
      return;
    }

    if (res.status === 500) {
      console.log("internal server error");
      return;
    }
    if (res.ok) {
      fetchDemandsForLog = await res.json();
      return fetchDemandsForLog;
    } else {
      console.error("Failed to fetch items for the demand:", res.statusText);
    }
  } catch (err) {
    console.log(err);
  }
};
export const fetchItemByDemand = async (demandId: number) => {
  try {
    const res = await fetch(
      `http://localhost:8080/api/demandItems/demand/${demandId}`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );

    if (res.status === 403) {
      console.error(
        "Failed to fetch items for the demand: Unauthorized. Check your token and permissions.",
      );
      return;
    }

    if (res.status === 500) {
      console.error(
        "Failed to fetch items for the demand: Internal Server Error. Check server logs.",
      );
      return;
    }

    if (res.ok) {
      fetchedDemandItems = await res.json();
      return fetchedDemandItems;
    } else {
      console.error("Failed to fetch items for the demand:", res.statusText);
    }
  } catch (error) {
    console.error(
      "An error occurred while fetching items for the demand:",
      error,
    );
  }
};

export const fetchItems = async () => {
  if (isFetched) {
    return fetchedItems;
  }

  try {
    const res = await fetch("http://localhost:8080/api/v1/items", {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (res.status === 403) {
      console.error(
        "Failed to fetch items: Unauthorized. Check your token and permissions.",
      );
      return;
    }

    if (res.status === 500) {
      console.error(
        "Failed to fetch items: Internal Server Error. Check server logs.",
      );
      return;
    }

    if (res.ok) {
      fetchedItems = await res.json();
      isFetched = true;
    } else {
      console.error("Failed to fetch items:", res.statusText);
    }
  } catch (error) {
    console.error("An error occurred while fetching items:", error);
  }
};

export async function fetchCategories() {
  const response = await fetch("http://localhost:8080/api/categorie/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  if (response.status === 200) {
    const fetchedCategories = await response.json();
    return fetchedCategories;
  }
}

export async function fetchFamilles() {
  const response = await fetch("http://localhost:8080/api/famille/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  if (response.status === 200) {
    const fetchedFamillies = await response.json();
    return fetchedFamillies;
  }
}

export async function fetchSousFamilles() {
  const response = await fetch("http://localhost:8080/api/sousFamille/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  if (response.status === 200) {
    const fetchedSousFamillies = await response.json();
    return fetchedSousFamillies;
  }
}

export async function fetchItemsBySousFamille(sousFamilleId: number) {
  const response = await fetch(
    `http://localhost:8080/api/v1/items/sousFamille/${sousFamilleId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    },
  );
  if (response.status === 200) {
    const fetchedSousFamilleItems = await response.json();
    return fetchedSousFamilleItems;
  }
}

export const getItems = () => fetchedItems;
export const getDemands = () => fetchedDemands;
export const getDemandItems = () => fetchedDemandItems;
export const getFetchedCategories = () => fetchedCategories;
export const getFetchedFamillies = () => fetchedFamillies;
export const getFetchedSousFamillies = () => fetchedSousFamillies;
export const getFetchedSousFamilleItems = () => fetchedSousFamilleItems;
export const getFetchedDemandsByCategorie = () => fetchedDemandsByCategorie;
export const getFetchedDemandsForLog = () => fetchDemandsForLog;
